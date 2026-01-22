import { effect, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiCallsService } from './api/api-calls.service';

export interface DashBoard {
  id: string;
  title: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  serviceApiCalls = inject(ApiCallsService);

  private _dashboards = toSignal(this.serviceApiCalls.getDashboards(), { initialValue: undefined });
  private dashboards = signal<DashBoard[] | []>([]);

  private activeDashboard = signal<DashBoard>(this.dashboards()[0]);

  boards = this.dashboards.asReadonly();
  activeBard = this.activeDashboard.asReadonly();

  constructor() {
    effect(() => {
      if (this._dashboards() && this._dashboards()!.length > 0) {
        this.dashboards.set(this._dashboards()!);
      }
    });
  }

  activateDashboard(id: DashBoard['id']) {
    const activeBoard = this.dashboards().find((board) => board.id === id);
    if (activeBoard) {
      this.activeDashboard.set(activeBoard);
    }
  }
}
