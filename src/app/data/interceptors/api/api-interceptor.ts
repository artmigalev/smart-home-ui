import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '@app/environments/environments';

export const apiInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  if (request.url.startsWith('/api')) {
    const apiRequest = request.clone({
      url: `${environment.apiUrl}${request.url}`,
    });

    return next(apiRequest);
  }

  return next(request);
};
