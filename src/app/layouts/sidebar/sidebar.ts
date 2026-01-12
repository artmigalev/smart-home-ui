import { Component } from '@angular/core';
import SidebarHeaderComponent from './sidebar-header/sidebar-header';
import SidebarFooterComponent from './sidebar-footer/sidebar-footer';
import SidebarMenuComponent from './sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarHeaderComponent, SidebarFooterComponent, SidebarMenuComponent],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export default class SidebarComponent {}
