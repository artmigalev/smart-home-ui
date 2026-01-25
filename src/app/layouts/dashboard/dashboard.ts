import { Component, computed, inject } from '@angular/core';
import { AuthService } from '@app/data/services/auth/auth.service';
import { DashboardService } from '@app/data/services/dashbord.service';
import { TabsService } from '@app/data/services/tab/tabs.service';
import { MessagesForUser } from '@app/shared/messages-for-user.enum';
import TabSwitcherComponent from '@components/tab-switcher/tab-switcher.';
import CardListComponent from '@layouts/card-list/card-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabSwitcherComponent, CardListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class DashboardComponent {
  tadService = inject(TabsService);
  serviceAuth = inject(AuthService);
  private _serviceDashboards = inject(DashboardService);

  dashboards = computed(() => this._serviceDashboards.dashboards());

  emptyStateMessage = MessagesForUser.EMPTY_STATE_FOR_DASHBOARD;

  activeTab = computed(() => this.tadService.tab());
}
