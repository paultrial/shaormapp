import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideAuth0,
  AuthHttpInterceptor,
  authHttpInterceptorFn,
} from '@auth0/auth0-angular';
import { provideHttpClient, withFetch, withInterceptors, HTTP_INTERCEPTORS } from "@angular/common/http"
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([authHttpInterceptorFn])
    ),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-wth8xks0zqja4d1c.us.auth0.com',
      clientId: 'RpM3Rm5WPNIOqPGD6POVnL5n6vWU7Qi9',
      authorizationParams: {
        redirect_uri: environment.url,
        audience: 'shaormappFlask',

        // Request this scope at user authentication time
        // scope: 'read:current_user',

      }
      ,
      httpInterceptor: {
        allowedList: [`${environment.apiUrl}/*`]
      }
    }),
  ]
};
