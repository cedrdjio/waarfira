import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxApexchartsModule } from 'ngx-apexcharts';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(NgxApexchartsModule)]
};
