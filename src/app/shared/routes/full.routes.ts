import { Routes } from '@angular/router';
import { ConfirmCodeComponent } from '../../auth/components/forget-password/confirm-code/confirm-code.component';
import { ForgetPasswordComponent } from '../../auth/components/forget-password/forget-password/forget-password.component';
import { NewPasswordComponent } from '../../auth/components/forget-password/new-password/new-password.component';
import { LoginComponent } from '../../auth/components/login/login.component';
import { RegisterComponent } from '../../auth/components/register/register.component';


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
