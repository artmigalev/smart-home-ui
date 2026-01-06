import { TypeEntities } from '../app/shared/type-entities.enum';

export interface Sensor {
  type: TypeEntities.sensor;
  icon: string;
  label: string;
  value: {
    amount: number;
    unit: string;
  };
}
