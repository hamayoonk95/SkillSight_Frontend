// Angular core imports
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// App imports
import { AuthService } from '../../services/auth-service/auth.service';
import { SnackbarService } from '../../services/snack-bar/snack-bar.service';
import { NavbarLink } from './navbar-link.interface';

/**
 * NavbarComponent handles the navigation bar functionality including toggling visibility,
 * handling logout, and displaying navigation links based on authentication status.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(
    public authService: AuthService, // Provides authentication-related functionality
    private snackBarService: SnackbarService // Provides snackbar notifications
  ) {}

  // Navigation links for the navbar
  navigationLinks: NavbarLink[] = [
    { label: 'Dashboard', route: '', isVisible: true },
    { label: 'About', route: 'about', isVisible: true },
    { label: 'Gap Analysis', route: 'skill-gap', isVisible: true },
    { label: 'Role Profiling', route: 'role-profiler', isVisible: true },
    { label: 'Colab Hub', route: 'colab-hub', isVisible: true },
    { label: 'Login', route: 'login', requiresAuthentication: false },
    { label: 'Register', route: 'register', requiresAuthentication: false },
    { label: 'Logout', requiresAuthentication: true, isLogout: true },
  ];
  isScrolled = false; //controls the colors of navbar on scroll
  showNav = false; // Controls the visibility of the navbar

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScrolled = scrollPosition > 0;
  }

  // Toggles the visibility of the navigation menu
  toggleNav(): void {
    this.showNav = !this.showNav;
  }

  // Closes the navigation menu
  closeNav(): void {
    this.showNav = false;
  }

  // Handles user logout
  onLogout(): void {
    this.closeNav();
    this.snackBarService.open('You have been logged out', 'success');
    this.authService.logout();
  }
}
