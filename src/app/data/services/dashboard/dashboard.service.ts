import { inject, Injectable, linkedSignal, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ApiCallsService } from '../api/api-calls.service';
import { EMPTY } from 'rxjs';
import { DashBoardData } from '@app/types/dashboard.interface';
import { Tab } from '@app/types/tab.interface';

export interface DashBoard {
  id: string;
  title: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _serviceApiCalls = inject(ApiCallsService);

  dashboards = toSignal(this._serviceApiCalls.getDashboards(), { initialValue: [] });
  // private _activeDashboard = signal<DashBoard | undefined>(this.dashboards()[0]);

  _activeDashboardId = signal<DashBoard['id']>('overview');
  dashboardResource = rxResource({
    params: () => this._activeDashboardId(),
    stream: ({ params }) => (params ? this._serviceApiCalls.getDashBoardWithId(params) : EMPTY),
  });

  _store = linkedSignal({
    source: () => this._activeDashboardId(),
    computation: () => this.dashboardResource.value(),
    equal: (a, b) => a === b,
  });
  activateDashboard(id: DashBoard['id']): void {
    this._activeDashboardId.set(id);
  }

  updateDashboardTabs(tab: Tab): Tab[] {
    const tabs = this.dashboardResource.value()?.tabs;
    return tabs?.map((boardTab) => (boardTab.id === tab.id ? tab : boardTab)) ?? [];
  }

  updateDashboard(tabsNew: Tab[]): DashBoardData {
    const dashboard = this.dashboardResource.value();
    return {
      ...dashboard,
      tabs: tabsNew,
    };
  }
}
