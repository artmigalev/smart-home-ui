import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Endpoints_GET } from '@app/shared/endpoints.enum';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { DashBoardData, Dashboards } from '@app/types/dashboard.interface';
import { DashBoard } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  private _http = inject(HttpClient);

  getDashboards(): Observable<Dashboards | []> {
    return this._http.get<DashBoard[]>(Endpoints_GET.DASHBOARDS).pipe(
      map((result) => result),
      catchError(() => of([])),
    );
  }

  getDashBoardWithId(id: DashBoard['id']): Observable<DashBoardData | undefined> {
    if (!id) return new Observable();
    return this._http.get<DashBoardData>(`${Endpoints_GET.DASHBOARDS}/${id}`).pipe(
      map((data) => {
        console.log(data);
        return data;
      }),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(error));
      }),
    );
  }

  getDevices() {
    return this._http.get(Endpoints_GET.DEVICES);
  }
}
