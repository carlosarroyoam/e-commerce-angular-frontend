import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './features/login/login.component';
import { UsersComponent } from './features/users/users.component';

import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    children: [],
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}