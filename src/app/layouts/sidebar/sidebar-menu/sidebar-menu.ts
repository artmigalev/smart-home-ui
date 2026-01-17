import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '@app/data/services/auth/auth.service';
import { TabsService } from '@app/data/services/tab/tabs.service';
@Component({
  selector: 'app-sidebar-menu',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
})
export default class SidebarMenuComponent {
  serviceAuth = inject(AuthService);
  serviceTab = inject(TabsService);
  activeTab = this.serviceTab.tab;

  userIsAuth = computed(() => this.serviceAuth.isAuthenticated());
}
