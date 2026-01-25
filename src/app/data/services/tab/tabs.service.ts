import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Tab } from '../../../types/tab.interface';
import { Card } from '@app/types/card.interface';
import { DashboardService } from '../dashbord.service';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private _serviceDashboards = inject(DashboardService);
  dashboardTabs = computed(() => this._serviceDashboards.dashboardResource.value()?.tabs);

  protected _tabs = signal<Tab[]>([]);

  protected _activeIdTab = signal<Tab['id']>(this._tabs()[0]?.id);

  constructor() {
    effect(() => {
      const tabs = this.dashboardTabs();
      if (tabs) {
        this._tabs.set(tabs);
      }
    });
  }

  activateTab(id: Tab['id']) {
    this._activeIdTab.set(id);
  }

  tabsNamesAndIds = computed(() =>
    this._tabs().map((tab) => ({ id: tab['id'], title: tab['title'] })),
  );
  tabs = this._tabs.asReadonly();

  tab = computed(() => this._tabs().find((tab) => tab.id === this._activeIdTab()));

  getActiveTab(id: Tab['id']): Tab | undefined {
    return this._tabs().find((t) => t.id === id);
  }

  updateTabCards(newCards: Card[]): void {
    const updateTab: Tab = {
      ...this.tab()!,
      cards: newCards,
    };
    this._tabs.update((previous) =>
      previous.map((tab) => (tab.id === updateTab.id ? updateTab : tab)),
    );
  }
}
