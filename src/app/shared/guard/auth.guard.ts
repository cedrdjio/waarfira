import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);
  if (authService.getAccessToken()) {
    return true;
  }
  // const accessToken: string = authService.getAccessToken().accessToken;
    const accessToken: string = '';

  if (accessToken) {
    return true;
  } else {
    router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
