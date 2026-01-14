import { Component, computed, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import DashboardComponent from './layouts/dashboard/dashboard';
import SidebarComponent from '@app/layouts/sidebar/sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, SidebarComponent, DashboardComponent, MatSidenavModule, MatIcon],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('smart-home-ui');

  menuIconName = {
    open: 'menu_open',
    close: 'menu',
  };
  private burgerStatus = signal<string>(this.menuIconName.close);
  isOpen = computed(() => this.burgerStatus());

  setStatusMenu(event: boolean) {
    if (event === true) {
      this.burgerStatus.set(this.menuIconName.open);
    } else {
      this.burgerStatus.set(this.menuIconName.close);
    }
  }
}
