import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

import { DashBoardData } from '@app/types/dashboard.interface';

export const tabResolver: ResolveFn<DashBoardData['tabs']> = (route: ActivatedRouteSnapshot) => {
  const dashboard = route.parent?.data['dashboard'] as DashBoardData;
  const tabs = dashboard.tabs;
  return tabs;
};
