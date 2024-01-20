// Angular core imports
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService, // Injecting the JwtHelperService for handling JWT tokens
    private router: Router // Injecting the Router for navigation purposes
  ) {}

  /**
   * Checks if the user is authenticated.
   * @returns A boolean indicating whether the user is authenticated (true) or not (false).
   */
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

  /**
   * Stores the JWT access token in local storage.
   * @param token - The JWT token to be stored.
   */
  public storeToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  /**
   * Logs out the current user.
   * It removes the access token from local storage and navigates to the login page.
   */
  public logout(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }
}
