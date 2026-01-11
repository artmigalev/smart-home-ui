import { Component, inject, output } from '@angular/core';
import { TabsService } from '@services/tab-service/tabs.service';
import TabSwitcherComponent from '@components/tab-switcher/tab-switcher.';
import CardListComponent from '@layouts/card-list/card-list';
import { Tab } from '@app/types/tab.interface';
import { ToggledData } from '@app/types/card.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabSwitcherComponent, CardListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class DashboardComponent {
  tadService = inject(TabsService);

  newTabId = output<Tab['id']>();

  cardListData = output<ToggledData>();
}
