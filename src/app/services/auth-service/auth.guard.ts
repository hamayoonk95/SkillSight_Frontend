// Angular core imports
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// Auth service import
import { AuthService } from './auth.service';
// snackbar import
import { SnackbarService } from '../snack-bar/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, // Injecting the AuthService for checking authentication status
    private router: Router, // Injecting the Router for navigation
    private snackBarService: SnackbarService // Injecting the SnackbarService for showing messages
  ) {}

  /**
   * Determines if a route can be activated based on the user's authentication status.
   * @param route - Information about a route at the moment of the guard check.
   * @param state - Router state snapshot.
   * @returns A boolean, Observable, or UrlTree. If the user is authenticated, it returns true,
   * allowing the navigation. If not, it shows a snackbar message, redirects to the login page,
   * and returns a UrlTree to the login route.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticated()) {
      // If the user is authenticated, allow the route to be activated
      return true;
    } else {
      // If the user is not authenticated, show a snackbar message
      this.snackBarService.open('You need to be logged in', 'error');
      // Redirect to the login page and return a UrlTree
      return this.router.createUrlTree(['/login']);
    }
  }
}
