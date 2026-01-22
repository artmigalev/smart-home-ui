import { Component, inject } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { TabsService } from '@app/data/services/tab/tabs.service';

@Component({
  selector: 'app-tab-switcher',
  imports: [MatTabsModule],
  standalone: true,
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
})
export default class TabSwitcherComponent {
  tabService = inject(TabsService);

  dataWithTabs = this.tabService.tabsNamesAndIds;

  toggleTab(event: MatTabChangeEvent) {
    this.tabService.activateTab(event.tab.id!);
  }
}
