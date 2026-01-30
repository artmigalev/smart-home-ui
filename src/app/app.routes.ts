import { Routes } from '@angular/router';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';
import { dashboardResolver } from './shared/resolvers/dashboard/dashboard.resolver';
import { tabResolver } from './shared/resolvers/tab/tab.resolver';
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'App Layout',
    children: [
      {
        path: 'dashboards/:dashboardId',
        loadComponent: () => import('./layouts/dashboard/dashboard'),
        title: 'DashboardPage',
        resolve: { dashboard: dashboardResolver },
        children: [
          {
            path: ':tabId',
            loadComponent: () => import('./components/tab/tab'),
            title: 'Tab Page',
            resolve: {
              tab: tabResolver,
            },
          },
        ],
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
