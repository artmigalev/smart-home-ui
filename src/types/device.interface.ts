import { TypeEntities } from '../app/shared/type-entities.enum';

export interface Device {
  type: TypeEntities.device;
  icon: string;
  label: string;
  state: boolean;
}
