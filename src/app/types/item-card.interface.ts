export interface ItemCard {
  type: string;
  icon: string;
  label: string;
  value?: {
    amount: number;
    unit: string;
  };
  state?: boolean;
}

export type SensorType = Required<Omit<ItemCard, 'state'>>;
export type DeviceType = Required<Omit<ItemCard, 'value'>>;
