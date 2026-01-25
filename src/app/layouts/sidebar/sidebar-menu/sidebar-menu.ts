import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '@app/data/services/auth/auth.service';
import { DashBoard, DashboardService } from '@app/data/services/dashbord.service';
@Component({
  selector: 'app-sidebar-menu',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
})
export default class SidebarMenuComponent {
  serviceAuth = inject(AuthService);
  serviceDashboard = inject(DashboardService);
  dashboards = computed(() => this.serviceDashboard.dashboards());
  activeBoard = computed(() => this.serviceDashboard.activeDashboard());

  onClickBoard(id: DashBoard['id']) {
    this.serviceDashboard.activateDashboard(id);
  }
}
