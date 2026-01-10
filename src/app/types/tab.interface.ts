import { Card } from './card.interface';

export interface Tab {
  id: string;
  title: string;
  cards: Card[];
}
