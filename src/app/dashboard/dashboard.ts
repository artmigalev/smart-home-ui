import { Component } from '@angular/core';
import TabSwitcherComponent from '../tab-switcher/tab-switcher.';
import CardListComponent from '../card-list/card-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabSwitcherComponent, CardListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class DashboardComponent {}
