// jwt-options.factory.ts
import { environment } from '../../environments/environment';

// Factory function to provide configuration for JWT
export function jwtOptionsFactory() {
  return {
    tokenGetter: () => localStorage.getItem('accessToken'),
    allowedDomains: environment.apiUrl,
    disallowedRoutes: [
      `${environment.apiUrl}/api/users/login`,
      `${environment.apiUrl}/api/users/register`,
      `${environment.apiUrl}/`,
    ],
  };
}
