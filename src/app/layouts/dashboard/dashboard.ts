import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from '@app/data/services/auth/auth.service';
import { DashboardService } from '@app/data/services/dashboard/dashboard.service';
import { MessagesForUser } from '@app/shared/messages-for-user.enum';
import TabSwitcherComponent from '@components/tab-switcher/tab-switcher.';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spinner } from '@app/components/spinner/spiner';
import { Notify } from '@app/components/notify/notify';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ApiCallsService } from '@app/data/services/api/api-calls.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { DashBoardData } from '@app/types/dashboard.interface';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabSwitcherComponent, MatProgressSpinnerModule, Spinner, Notify, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class DashboardComponent {
  serviceAuth = inject(AuthService);
  serviceDashboards = inject(DashboardService);
  serviceApiCalls = inject(ApiCallsService);

  route = inject(ActivatedRoute);
  router = inject(Router);

  dashboard = toSignal(this.route.data.pipe(map((data) => data['dashboard'] as DashBoardData)));

  tabs = computed(() => this.dashboard()?.tabs ?? []);

  emptyDashboards = computed<boolean>(() => this.serviceDashboards.dashboards().length === 0);

  isLoading = computed(() => !!this.router.currentNavigation());

  emptyStateMessage = MessagesForUser.EMPTY_STATE_FOR_DASHBOARD;

  constructor() {
    effect(() => {
      const currentRoute = this.route.firstChild;
      console.log(currentRoute);
      if (!currentRoute) {
        const firstTabId = this.dashboard()?.tabs[0].id;
        if (firstTabId) {
          this.router.navigate([firstTabId], {
            relativeTo: this.route,
            replaceUrl: true,
          });
        }
      }
    });
  }
}
