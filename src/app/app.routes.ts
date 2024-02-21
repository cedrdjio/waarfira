import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { FullComponent } from './shared/components/layout/full/full.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { full } from './shared/routes/full.routes';
import { content } from './shared/routes/routes';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AuthLayoutComponent } from './components/authentication/auth-layout/auth-layout.component';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: ForgetPasswordComponent,
      },
    ],
  },
  {
    path: '',
    component: ContentComponent,
    // canActivate: [AdminGuard],
    children: content,
  },
  {
    path: '',
    component: FullComponent,
    // canActivate: [AdminGuard],
    // children: full,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
