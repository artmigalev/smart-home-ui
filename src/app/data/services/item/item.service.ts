import { computed, inject, Injectable } from '@angular/core';
import { TypeEntities } from '@shared/type-entities.enum';
import { Card } from '@app/types/card.interface';
import { DeviceType, ItemCard, SensorType } from '@app/types/item-card.interface';
import { CardService } from '../card/card.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private cardService = inject(CardService);

  protected _items = computed(() => {
    const items: Record<Card['id'], ItemCard[]> = {};
    const allCards = this.cardService.allCards();

    if (allCards) {
      for (const card of allCards) {
        if (card.items) {
          items[card.id] = card.items;
        }
      }
    }

    return items;
  });

  getCardItems(id: Card['id']) {
    return this._items()[id];
  }

  updateItems(item: ItemCard, cardId: Card['id']) {
    console.log(this._items());
    const card = this.cardService.getCard(cardId);
    const newItems = this._items()[cardId].map((cardItem) =>
      cardItem.label === item.label ? item : cardItem,
    );
    const updateCard: Card = {
      ...card!,
      items: newItems,
    };

    this.cardService.updateCards(updateCard);
  }
  changeStateDevice(newState: boolean, device: ItemCard, cardId: Card['id']) {
    const upDateDevice: ItemCard = {
      ...device,
      state: newState,
    };
    this.updateItems(upDateDevice, cardId);
  }

  getCardDevices(cardId: Card['id']): DeviceType[] | undefined {
    return this._items()[cardId].filter(
      (item) => item.type === TypeEntities.device,
    ) as DeviceType[];
  }
  getCardSensors(cardId: Card['id']): SensorType[] | undefined {
    return this._items()[cardId].filter(
      (item) => item.type === TypeEntities.sensor,
    ) as SensorType[];
  }
}
