import { HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@app/data/services/token/token.service';
import { tap } from 'rxjs';

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
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        switch (event.status) {
          case 401: {
            router.navigate(['/login']);
            break;
          }

          default: {
            break;
          }
        }
      }
    }),
  );
};
