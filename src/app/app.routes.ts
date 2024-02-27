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
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { ResetPasswordSuccessComponent } from './components/authentication/reset-password-success/reset-password-success.component';
import { OnboardingOneComponent } from './components/authentication/onboarding-one/onboarding-one.component';
import { OnboardingTwoComponent } from './components/authentication/onboarding-two/onboarding-two.component';
import { OnboardingThreeComponent } from './components/authentication/onboarding-three/onboarding-three.component';
import { StatusCheckComponent } from './components/authentication/status-check/status-check.component';

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

      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'reset-password-success',
        component: ResetPasswordSuccessComponent,
      },
      {
        path: 'onboarding-1',
        component: OnboardingOneComponent,
      },
      {
        path: 'onboarding-2',
        component: OnboardingTwoComponent,
      },
      {
        path: 'onboarding-3',
        component: OnboardingThreeComponent,
      },
      {
        path: 'status-check',
        component: StatusCheckComponent,
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
