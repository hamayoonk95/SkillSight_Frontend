// Angular core imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Navbar component import
import { NavbarComponent } from './components/navbar/navbar.component';

/**
 * AppComponent is the root component of the application.
 * It includes the NavbarComponent for consistent navigation and RouterOutlet
 * for displaying views based on the current route.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, NavbarComponent],
})
export class AppComponent {
  title = 'skillsight';
}
