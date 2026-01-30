import { effect, inject, Injectable, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ApiCallsService } from '../api/api-calls.service';
import { EMPTY } from 'rxjs';

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
  activeDashboard = signal<DashBoard | undefined>(this.dashboards()[0]);

  dashboardResource = rxResource({
    params: () => this.activeDashboard(),
    stream: ({ params }) => (params ? this._serviceApiCalls.getDashBoardWithId(params.id) : EMPTY),
  });

  constructor() {
    effect(() => {
      if (!this.activeDashboard() && this.dashboards().length > 0) {
        this.activateDashboard();
      }
    });
  }

  activateDashboard(id?: DashBoard['id']) {
    if (id) {
      const activeBoard = this.dashboards()!.find((board) => board.id === id);
      if (activeBoard) {
        this.activeDashboard.set(activeBoard);
      }
    } else {
      this.activeDashboard.set(this.dashboards()[0]);
    }
  }
}
