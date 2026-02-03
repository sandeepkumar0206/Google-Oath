import { Routes } from '@angular/router';
import { loginGuardGuard } from './Guard/login-guard-guard';
import { authGuardGuard } from './Guard/auth-guard-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./Component/login/login').then(m => m.Login),
      canActivate: [loginGuardGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Component/dashboard/dashboard').then(m => m.Dashboard),
      canActivate: [authGuardGuard]
  },
  { path: '**', redirectTo: 'login' }
];
