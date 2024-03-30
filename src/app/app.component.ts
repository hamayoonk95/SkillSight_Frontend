// Angular core imports
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WarmUpService } from './services/warmup-service/warmup.service';

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
export class AppComponent implements OnInit {
  title = 'skillsight';
  constructor(private warmUpService: WarmUpService) {}

  ngOnInit(): void {
    this.warmUpService.warmUpBackend().subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error('Error', error),
    });
  }
}
