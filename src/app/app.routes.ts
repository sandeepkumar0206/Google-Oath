import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'login',loadComponent:()=>import('./Component/login/login').then(m=>m.Login)},
  {path:'dashboard',loadComponent:()=>import('./Component/dashboard/dashboard').then(m=>m.Dashboard)},

];
