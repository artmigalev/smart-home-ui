import { computed, inject, Injectable } from '@angular/core';
import { Tab } from '@app/types/tab.interface';
import { Card } from '@app/types/card.interface';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  serviceDashboard = inject(DashboardService);

  tabs = computed<Tab[] | undefined>(() => this.serviceDashboard.dashboardResource.value()?.tabs);

  getTab(id: Tab['id']): Tab | undefined {
    return this.tabs()?.find((tab) => tab.id === id);
  }

  updateTab(newCards: Card[], tabId: Tab['id']): Tab | undefined {
    const tab = this.getTab(tabId);
    if (tab)
      return {
        ...tab,
        cards: newCards,
      };
    return;
  }
}
