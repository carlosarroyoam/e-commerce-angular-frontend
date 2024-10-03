import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '@/app/auth/auth-layout.component';
import { LoginPageComponent } from '@/app/auth/pages/login/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
