import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Endpoints_GET } from '@app/shared/endpoints.enum';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  http = inject(HttpClient);

  getDashboards() {
    return this.http.get(Endpoints_GET.DASHBOARDS);
  }
  getDevices() {
    return this.http.get(Endpoints_GET.DEVICES);
  }
}
