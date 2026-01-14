import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import DashboardComponent from './layouts/dashboard/dashboard';
import SidebarComponent from '@app/layouts/sidebar/sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { SidebarService } from './data/services/side-bar/sidebar.service';
@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, SidebarComponent, DashboardComponent, MatSidenavModule, MatIcon],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  serviceSidebar = inject(SidebarService);
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
