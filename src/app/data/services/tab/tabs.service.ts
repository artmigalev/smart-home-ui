import { computed, inject, Injectable, linkedSignal } from '@angular/core';
import { Tab } from '../../../types/tab.interface';
import { Card } from '@app/types/card.interface';
import { DashboardService } from '../dashboard/dashbord.service';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private _serviceDashboards = inject(DashboardService);
  dashboard = computed(() => this._serviceDashboards.dashboardResource.value());

  protected _tabs = linkedSignal(() => this.dashboard()?.tabs);
  _activeTabId = linkedSignal<Tab['id'] | undefined>(() => this.dashboard()?.tabs[0].id);

  tabs = computed<Tab[] | undefined>(() => this._tabs());

  tab = computed<Tab | undefined>(() =>
    this._tabs()?.find((tab) => tab.id === this._activeTabId()),
  );

  activateTab(id: Tab['id']) {
    this._activeTabId.set(id);
  }

  updateTabCards(newCards: Card[]): void {
    const updateTab: Tab = {
      ...this.tab()!,
      cards: newCards,
    };
    this._tabs.update(
      (previous) => previous && previous.map((tab) => (tab.id === updateTab.id ? updateTab : tab)),
    );
  }
}
