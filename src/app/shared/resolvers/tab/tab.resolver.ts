import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

import { ResponseTabs } from '@app/types/response-tabs.interface';

export const tabResolver: ResolveFn<ResponseTabs['tabs']> = (route: ActivatedRouteSnapshot) => {
  const dashboard = route.parent?.data['dashboard'] as ResponseTabs;
  const tabs = dashboard.tabs;
  return tabs;
};
