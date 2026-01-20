import { DeviceItem } from './device.interface';
import { SensorItem } from './sensor.interface';

export interface Card {
  id: string;
  title: string;
  layout: 'singleDevice' | 'horizontalLayout' | 'verticalLayout';

  items: CardItem[];
}

export type CardItem = DeviceItem | SensorItem;
