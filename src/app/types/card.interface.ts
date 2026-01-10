import { DeviceType, ItemCard } from './item-card.interface';

export interface Card {
  id: string;
  title: string;
  layout: string;
  items: ItemCard[];
  state?: boolean;
}

export interface ToggledData {
  statusCard: boolean;
  cardId?: Card['id'];
  device?: DeviceType;
}
