import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { JwtModule } from '@auth0/angular-jwt';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { entorno } from './_modelos/_seguridad/entorno';

export function tokenGetter() {
  return sessionStorage.getItem(entorno.TOKEN_NAME);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ["localhost:8080"],
          disallowedRoutes: ["http://example.com/examplebadroute/"],
        },
      })
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),
  ],
};
