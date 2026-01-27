import { Component, computed, inject } from '@angular/core';
import { AuthService } from '@app/data/services/auth/auth.service';
import { DashboardService } from '@app/data/services/dashbord.service';
import { TabsService } from '@app/data/services/tab/tabs.service';
import { MessagesForUser } from '@app/shared/messages-for-user.enum';
import TabSwitcherComponent from '@components/tab-switcher/tab-switcher.';
import CardListComponent from '@layouts/card-list/card-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spinner } from '@app/components/spinner/spiner';
import { Notify } from '@app/components/notify/notify';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabSwitcherComponent, CardListComponent, MatProgressSpinnerModule, Spinner, Notify],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class DashboardComponent {
  tadService = inject(TabsService);
  serviceAuth = inject(AuthService);
  serviceDashboards = inject(DashboardService);

  emptyDashboards = computed<boolean>(() => this.serviceDashboards.dashboards().length === 0);
  dashboard = computed(() => this.serviceDashboards.dashboardResource.value());

  isLoading = computed(() => this.serviceDashboards.dashboardResource.isLoading());

  userMessage = MessagesForUser.EMPTY_STATE_FOR_DASHBOARD;

  emptyStateMessage = MessagesForUser.EMPTY_STATE_FOR_DASHBOARD;

  tab = computed(() => this.tadService.tab());
}
