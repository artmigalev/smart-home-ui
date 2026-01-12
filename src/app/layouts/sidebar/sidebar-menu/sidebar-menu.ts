import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TabsService } from '@app/data/services/tab/tabs.service';
@Component({
  selector: 'app-sidebar-menu',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
})
export default class SidebarMenuComponent {
  serviceTab = inject(TabsService);

  activeTab = this.serviceTab.tab;
}
