import { Routes } from '@angular/router';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'App Layout',
    // canActivate: [
    //   () => {
    //     const router = inject(Router);
    //     const serviceAuth = inject(AuthService);
    //     if (!serviceAuth.isAuthenticated()) {
    //       const loginPath = router.parseUrl('/login');
    //       return new RedirectCommand(loginPath, { skipLocationChange: true });
    //     }
    //     return true;
    //   },
    // ],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login'),
    title: 'Login Page',
  },
  {
    path: '**',
    component: NotFound,
    title: ' Not Found Page',
  },
];
