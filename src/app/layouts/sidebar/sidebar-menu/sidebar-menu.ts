import { Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '@app/data/services/auth/auth.service';
import { DashBoard, DashboardService } from '@app/data/services/dashboard/dashboard.service';
import { NgClass } from '@angular/common';
import { Dashboards } from '@app/types/dashboard.interface';
import { UserProfileResponse } from '@app/types/user.interface';
@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink, NgClass],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
})
export default class SidebarMenuComponent {
  serviceAuth = inject(AuthService);
  serviceDashboard = inject(DashboardService);
  route = inject(ActivatedRoute);

  activeBoard = computed(() => this.route.snapshot.paramMap.get('dashboardId'));

  dashboards = input<Dashboards>();

  userInfo = input<UserProfileResponse>();

  onClickBoard(id: DashBoard['id']) {
    this.serviceDashboard.activateDashboard(id);
  }
}
