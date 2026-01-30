import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TabsService } from '@app/data/services/tab/tabs.service';
import CardListComponent from '@app/layouts/card-list/card-list';
import { ResponseTabs } from '@app/types/response-tabs.interface';
import { Tab as ITab } from '@app/types/tab.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-tab',
  imports: [CardListComponent],
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
})
export default class Tab {
  tabService = inject(TabsService);
  route = inject(ActivatedRoute);
  tabId = input.required<ITab['id']>();
  tabs = toSignal<ResponseTabs['tabs']>(
    this.route.data.pipe(
      map((data) => {
        return data['dashboard']['tabs'];
      }),
    ),
  );

  tab = computed(() => this.tabs()?.find((tab) => tab.id === this.tabId()));

  cards = computed(() => this.tab()?.cards ?? []);
}
