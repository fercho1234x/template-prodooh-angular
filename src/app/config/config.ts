import {InjectionToken} from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');

export const APPCONFIG: any = {
  sessionLocalStorageKey: 'sessionData',
  serverConfig: {
    grant_type: 'password',
    client_id: 6,
    client_secret: 'NWSyDPZ94jNMR0ypyO89U7s7mXqthbmGZRhJ5LlG'
  },
  endpoints: {
    url_services: 'http://ooh-prodooh-api.test',
    login: 'http://ooh-prodooh-api.test/oauth/token'
  }
};
