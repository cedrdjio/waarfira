import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/authentication/login/login.component';

export const full: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
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
