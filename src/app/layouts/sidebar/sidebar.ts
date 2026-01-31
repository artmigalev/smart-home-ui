import { Component, computed, inject } from '@angular/core';
import SidebarHeaderComponent from './sidebar-header/sidebar-header';
import SidebarFooterComponent from './sidebar-footer/sidebar-footer';
import SidebarMenuComponent from './sidebar-menu/sidebar-menu';
import { DashboardService } from '@app/data/services/dashboard/dashboard.service';
import { AuthService } from '@app/data/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarHeaderComponent, SidebarFooterComponent, SidebarMenuComponent],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export default class SidebarComponent {
  serviceDashboard = inject(DashboardService);
  serviceAuth = inject(AuthService);

  dashboards = computed(() => this.serviceDashboard.dashboards());
  user = computed(() => this.serviceAuth.user.value());
}
