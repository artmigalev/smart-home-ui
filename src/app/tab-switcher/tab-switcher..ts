import { Component, input, output } from '@angular/core';
import { Tab } from '../types/tab.interface';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-switcher',
  imports: [MatTabsModule],
  standalone: true,
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
})
export default class TabSwitcherComponent {
  tabs = input.required<Tab[]>();

  toggledTab = output<Tab['id']>();

  toggleTab(event: MatTabChangeEvent) {
    this.toggledTab.emit(event.tab.id!);
  }
}
