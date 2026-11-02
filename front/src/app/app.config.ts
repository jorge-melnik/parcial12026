import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptors/token-interceptor';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()), //Esto son mis rutas
    provideHttpClient(withInterceptors([tokenInterceptor])),

    providePrimeNG({
      theme: {
        preset: Aura,
      },
      license:
        'eyJpZCI6ImEyMzE5YTIxLWY3NWMtNGM2NC04MTY5LTA1YjgxYWFkZGI2OSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTM2MjY3NzYsImV4cCI6MTgyNTE2Mjc3Nn0.D3Bso0n8X-L_fQxxnET-PgXa4VLQPaJFP-MdM2ZKFvbdgISZFyew07lYcuomxH1-6n3N7INiQOVZwP2sBoNxBw',
    }),
  ],
};
