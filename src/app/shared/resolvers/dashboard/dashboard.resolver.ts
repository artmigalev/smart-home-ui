import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiCallsService } from '@app/data/services/api/api-calls.service';
import { ResponseTabs } from '@app/types/response-tabs.interface';

export const dashboardResolver: ResolveFn<ResponseTabs> = (route) => {
  const dashboard = inject(ApiCallsService).getDashBoardWithId(route.paramMap.get('dashboardId')!);

  return dashboard;
};
