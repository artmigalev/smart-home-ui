import { computed, inject, Injectable } from '@angular/core';
import { TabsService } from '../tab/tabs.service';
import { Card } from '@app/types/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private tabsService = inject(TabsService);

  protected _tabCards = computed(() => this.tabsService.tab()?.cards);

  cards = this._tabCards;

  allCards = computed(() => Array.from(this.tabsService.tabs(), (tab) => tab.cards).flat());

  getCard(id: Card['id']): Card | undefined {
    return this._tabCards()?.find((card) => card.id === id);
  }

  updateCards(card: Card): void {
    const upgradeCards = this._tabCards()?.map((tabCard) =>
      card.id === tabCard.id ? card : tabCard,
    );
    this.tabsService.updateTabCards(upgradeCards!);
  }
}
