import { Component } from '@angular/core';
import SidebarHeaderComponent from './sidebar-header/sidebar-header.component';
import SidebarFooterComponent from './sidebar-footer/sidebar-footer.component';
import SidebarMenuComponent from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarHeaderComponent, SidebarFooterComponent, SidebarMenuComponent],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export default class SidebarComponent {}
