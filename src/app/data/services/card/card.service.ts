import { computed, inject, Injectable } from '@angular/core';
import { TabsService } from '../tab/tabs.service';
import { Card } from '@app/types/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private tabsService = inject(TabsService);

  cards = computed(() => this.tabsService.tab()?.cards);

  allCards = computed(() => Array.from(this.tabsService.tabs() || [], (tab) => tab.cards).flat());

  getCard(id: Card['id']): Card | undefined {
    return this.cards()?.find((card) => card.id === id);
  }

  updateCards(card: Card): void {
    const upgradeCards = this.cards()?.map((tabCard) => (card.id === tabCard.id ? card : tabCard));
    this.tabsService.updateTabCards(upgradeCards!);
  }
}
