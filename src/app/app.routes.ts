import { Routes } from '@angular/router';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'App Layout',

    children: [
      {
        path: 'about',
        loadComponent: () => import('./pages/home/home'),
        title: 'App Layout',
      },
    ],
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
