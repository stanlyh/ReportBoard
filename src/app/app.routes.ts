import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [



      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    // redirectTo: '/dashboard',
    redirectTo: (route) => {
      // console.log(route);
      // const authService = inject(AuthService);
      // if (authService.isLoggedIn) {

      return '/dashboard/material';
    },
    pathMatch: 'full',
  },
];
