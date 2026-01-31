import { Tab } from './tab.interface';

export interface DashBoardData {
  tabs: Tab[];
}

export interface DashBoard {
  id: string;
  title: string;
  icon: string;
}
export type Dashboards = DashBoard[];
