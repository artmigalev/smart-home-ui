import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from '@app/data/services/auth/auth.service';
import { SidebarService } from '@app/data/services/side-bar/sidebar.service';
import DashboardComponent from '@app/layouts/dashboard/dashboard';
import SidebarComponent from '@app/layouts/sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [MatSlideToggleModule, SidebarComponent, DashboardComponent, MatSidenavModule, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {
  serviceSidebar = inject(SidebarService);
  serviceAuth = inject(AuthService);
  userIsAuth = computed(() => this.serviceAuth.isAuthenticated());

  protected readonly title = signal('smart-home-ui');

  menuIconName = {
    open: 'menu_open',
    close: 'menu',
  };
  burgerState = computed(() =>
    this.serviceSidebar.openedDrawer() === true ? this.menuIconName.open : this.menuIconName.close,
  );

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (event.isTrusted) this.serviceSidebar.onWidth();
  }
}
