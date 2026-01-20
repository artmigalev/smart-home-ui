export interface SensorItem {
  type: 'sensor';
  icon: string;
  label: string;
  value: {
    amount: number;
    unit: string;
  };
}
