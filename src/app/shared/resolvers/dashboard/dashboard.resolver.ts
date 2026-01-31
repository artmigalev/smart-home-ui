import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiCallsService } from '@app/data/services/api/api-calls.service';
import { DashboardService } from '@app/data/services/dashboard/dashboard.service';
import { DashBoardData } from '@app/types/dashboard.interface';

export const dashboardResolver: ResolveFn<DashBoardData | undefined> = (route) => {
  const serviceDashboard = inject(DashboardService);

  const dashboardId = route.paramMap.get('dashboardId');

  if (dashboardId) serviceDashboard.activateDashboard(dashboardId);

  const dashboard = inject(ApiCallsService).getDashBoardWithId(dashboardId!);

  console.log(dashboard);

  return dashboard;
};
