import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/authentication/login/login.component';
import { RegisterComponent } from '../../components/authentication/register/register.component';
import { ConfirmCodeComponent } from '../../components/authentication/forget-password/confirm-code/confirm-code.component';
import { ForgetPasswordComponent } from '../../components/authentication/forget-password/forget-password/forget-password.component';
import { NewPasswordComponent } from '../../components/authentication/forget-password/new-password/new-password.component';

export const full: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'auth/verification',
    component: ConfirmCodeComponent
  },
  {
    path: 'auth/forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'auth/new-password',
    component:NewPasswordComponent
  },
  // {
  //   path: 'error-page',
  //   loadChildren: () => import('../../pages/error/error.module').then(m => m.ErrorModule),
  // },
  // {
  //   path: 'coming-soon',
  //   loadChildren: () => import('../../pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  // },
  // {
  //   path: 'maintenance',
  //   loadChildren: () => import('../../pages/maintenance/maintenance.module').then(m => m.MaintenanceModule),
  // }
];
