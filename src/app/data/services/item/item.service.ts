import { computed, inject, Injectable } from '@angular/core';
import { TypeEntities } from '@shared/type-entities.enum';
import { Card, CardItem } from '@app/types/card.interface';
import { CardService } from '../card/card.service';
import { DeviceItem } from '@app/types/device.interface';
import { SensorItem } from '@app/types/sensor.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private cardService = inject(CardService);

  protected _items = computed(() => {
    const items: Record<Card['id'], Card['items']> = {};
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

  updateItems(item: CardItem, cardId: Card['id']) {
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
  changeStateDevice(newState: boolean, device: DeviceItem, cardId: Card['id']) {
    const upDateDevice: DeviceItem = {
      ...device,
      state: newState,
    };
    this.updateItems(upDateDevice, cardId);
  }

  getCardDevices(cardId: Card['id']): DeviceItem[] | undefined {
    return this._items()[cardId].filter(
      (item) => item.type === TypeEntities.device,
    ) as DeviceItem[];
  }
  getCardSensors(cardId: Card['id']): SensorItem[] | undefined {
    return this._items()[cardId].filter(
      (item) => item.type === TypeEntities.sensor,
    ) as SensorItem[];
  }
}
