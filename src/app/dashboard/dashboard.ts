import { Component, computed, input, output } from '@angular/core';
import TabSwitcherComponent from '../tab-switcher/tab-switcher.';
import CardListComponent from '../card-list/card-list';
import { Tab } from '../types/tab.interface';
import { ToggledData } from '../types/card.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabSwitcherComponent, CardListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class DashboardComponent {
  tabs = input.required<Tab[]>();
  tabId = input.required<Tab['id']>();
  tab = computed(() => this.tabs().find((tab) => tab.id === this.tabId()));
  cards = computed(() => this.tab()?.cards);

  newTabId = output<Tab['id']>();

  cardListData = output<ToggledData>();
}
