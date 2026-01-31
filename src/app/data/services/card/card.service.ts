import { Injectable } from '@angular/core';
import { Card, CardItem } from '@app/types/card.interface';
import { DeviceItem } from '@app/types/device.interface';
import { SensorItem } from '@app/types/sensor.interface';
import { TypeEntities } from '@app/shared/type-entities.enum';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  getCard(cards: Card[], id: Card['id']): Card | undefined {
    return id ? cards.find((card) => card.id === id) : undefined;
  }

  updateCards(card: Card, cards: Card[]): Card[] {
    return cards.map((cardOld) => (cardOld.id === card.id ? card : cardOld));
  }

  updateCardItems(item: CardItem, card: Card): CardItem[] {
    return card.items.map((itemCard) => (itemCard.label === item.label ? item : itemCard));
  }

  getCardDevices(card: Card): DeviceItem[] {
    return card.items.filter((item) => item.type === TypeEntities.device);
  }
  getCardSensors(card: Card): SensorItem[] {
    return card.items.filter((item) => item.type === TypeEntities.sensor);
  }
}
