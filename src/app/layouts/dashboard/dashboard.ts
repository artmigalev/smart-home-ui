import { Component, computed, inject } from '@angular/core';
import { AuthService } from '@app/data/services/auth/auth.service';
import { TabsService } from '@app/data/services/tab/tabs.service';
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

  constructor() {
    console.log(this.serviceAuth.isAuthenticated());
  }

  activeTab = computed(() => this.tadService.tab());
}
