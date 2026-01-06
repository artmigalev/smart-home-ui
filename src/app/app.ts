import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import SidebarComponent from './sidebar/sidebar.component';
import DashboardComponent from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, SidebarComponent, DashboardComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('smart-home-ui');
}
