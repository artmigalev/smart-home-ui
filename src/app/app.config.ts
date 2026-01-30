import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  NavigationError,
  provideRouter,
  Router,
  withComponentInputBinding,
  withNavigationErrorHandler,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './data/interceptors/api/api-interceptor';
import { authInterceptor } from './data/interceptors/auth/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withRouterConfig({ paramsInheritanceStrategy: 'always', urlUpdateStrategy: 'eager' }),
      withComponentInputBinding(),
      withNavigationErrorHandler((error: NavigationError) => {
        const router = inject(Router);
        if (error?.error) {
          console.error('Navigation error occurred:', error.error);
        }
        router.navigate(['/error']);
      }),
    ),
    provideHttpClient(withFetch(), withInterceptors([apiInterceptor, authInterceptor])),
  ],
};
