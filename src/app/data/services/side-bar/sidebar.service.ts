import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isDesktop = window.innerWidth > 768;
  private serviceAuth = inject(AuthService);
  private statusDrawer = signal<boolean>(this.isDesktop);

  openedDrawer = computed(() => this.statusDrawer() && this.serviceAuth.isAuthenticated());

  onWidth() {
    this.statusDrawer.set(window.innerWidth > 768);
  }
  changeStateBurger(event: boolean) {
    if (event === true) this.statusDrawer.set(true);
    else {
      this.statusDrawer.set(false);
    }
  }
}
