import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Endpoints_GET } from '@app/shared/endpoints.enum';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { DashBoard } from '../dashbord.service';
import { ResponseData } from '@app/types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  private _http = inject(HttpClient);

  getDashboards(): Observable<DashBoard[] | []> {
    return this._http.get<DashBoard[]>(Endpoints_GET.DASHBOARDS).pipe(
      map((result) => result),
      catchError(() => of([])),
    );
  }

  getDashBoardWithId(id: DashBoard['id']): Observable<ResponseData> {
    return this._http.get<ResponseData>(`${Endpoints_GET.DASHBOARDS}/${id}`).pipe(
      map((data) => data),
      catchError((error) => throwError(() => new Error(error))),
    );
  }

  getDevices() {
    return this._http.get(Endpoints_GET.DEVICES);
  }
}
