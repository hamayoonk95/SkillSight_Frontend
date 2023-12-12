import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navigationLinks = [
    { label: 'Dashboard', route: '' },
    { label: 'About', route: 'about' },
    { label: 'Gap Analysis', route: 'skill-gap' },
    { label: 'Role Profiling', route: 'role-profile' },
    { label: 'Colab Hub', route: 'colab-hub' },
    { label: 'Login', route: 'login' },
    { label: 'Register', route: 'register' },
  ];

  showNav = false;

  toggleNav(): void {
    this.showNav = !this.showNav;
  }

  closeNav(): void {
    this.showNav = false;
  }
}
