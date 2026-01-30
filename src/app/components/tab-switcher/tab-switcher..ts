import { Component, inject, input } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { TabsService } from '@app/data/services/tab/tabs.service';
import { Tab } from '@app/types/tab.interface';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-switcher',
  imports: [MatTabsModule, MatButtonModule],
  standalone: true,
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
})
export default class TabSwitcherComponent {
  tabService = inject(TabsService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  tabs = input<Tab[]>();

  toggleTab(event: MatTabChangeEvent) {
    this.router.navigate([event.tab.id], {
      relativeTo: this.route,
    });
    this.tabService.activateTab(event.tab.id!);
  }
}
