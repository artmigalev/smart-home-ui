import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@app/data/services/token/token.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const router = inject(Router);
  const serviceToken = inject(TokenService);
  const authToken = serviceToken.tokenGet();
  if (authToken) {
    const authRequestApi = request.clone({
      headers: request.headers.append('Authorization', `Bearer ${authToken}`),
    });

    return next(authRequestApi);
  }

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        serviceToken.tokenRemove();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    }),
  );
};
