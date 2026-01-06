import { Device } from './device.interface';
import { Sensor } from './sensor.interface';
import { TypeEntities } from '../app/shared/type-entities.enum';

export type Item = (Sensor | Device) & { type: TypeEntities };

export interface Card {
  id: string;
  title: string;
  layout: 'horizontalLayout' | 'verticalLayout' | 'singleDevice';
  items: Item[];
}
