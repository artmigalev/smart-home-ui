import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isDesktop = window.innerWidth > 768;

  private statusDrawer = signal<boolean>(this.isDesktop);

  openedDrawer = computed(() => this.statusDrawer());

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
