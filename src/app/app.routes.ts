import { Routes } from '@angular/router';
import { loginGuardGuard } from './Guard/login-guard-guard';
import { authGuardGuard } from './Guard/auth-guard-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./Component/login/login').then(m => m.Login)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Component/dashboard/dashboard').then(m => m.Dashboard)
  },
  { path: '**', redirectTo: 'login' }
];
