import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { FullComponent } from './shared/components/layout/full/full.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { full } from './shared/routes/full.routes';
import { content } from './shared/routes/routes';
import { DashboardComponent } from './components/doctor/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
 {
    path: '',
    component: ContentComponent,
    // canActivate: [AdminGuard],
    children: content
  },
   {
    path: '',
    component: FullComponent,
    // canActivate: [AdminGuard],
    children: full
  },
  {
    path: '**',
    redirectTo: ''
  }
];

