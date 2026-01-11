import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sidebar-menu',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export default class SidebarMenuComponent {}
