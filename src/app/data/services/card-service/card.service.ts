import { inject, Injectable } from '@angular/core';
import { TabsService } from '../tab-service/tabs.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  tabsService = inject(TabsService);
  // protected cards = signal<Card[]>()
}
