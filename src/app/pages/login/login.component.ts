// Angular core imports
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Angular Material imports
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

// App service imports
import { UserService } from '../../services/user-service/user-service';
import {
  UserLoginData,
  LoginResponse,
} from '../../services/user-service/user.interface';
import { AuthService } from '../../services/auth-service/auth.service';
import { SnackbarService } from '../../services/snack-bar/snack-bar.service';
/**
 * LoginComponent handles user authentication. It provides a stepper form for users to
 * enter their credentials and authenticate.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles/form-styles.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder, // FormBuilder for creating form groups
    private userService: UserService, // Service for user-related operations
    private snackbarService: SnackbarService, // Snackbar for displaying messages
    private router: Router, // Router for navigation
    private authService: AuthService // AuthService for handling authentication
  ) {}

  ngOnInit(): void {
    // Initialise the form group with validators
    this.loginFormGroup = this._formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Function to handle form submission
  submitLogin() {
    // Check if the form is invalid and exit if so
    if (this.loginFormGroup.invalid) {
      console.error('Form is invalid');
      return;
    }

    // Extract user data from the form
    const userLoginData: UserLoginData = {
      ...this.loginFormGroup.value,
    };

    // Attempt to log in the user using the UserService
    this.userService.loginUser(userLoginData).subscribe({
      next: (response: LoginResponse) => {
        this.authService.storeToken(response.token);
        this.snackbarService.open(response.message, 'success');
        this.router.navigate(['./']);
      },
      error: (error) => {
        const errorMessage = error.error.message;
        this.snackbarService.open(errorMessage, 'error');
      },
    });
  }
}
