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

// App imports
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';
import { SnackbarService } from '../../services/snack-bar/snack-bar.service';
import { UserService } from '../../services/user-service/user-service';
import {
  UserRegistrationData,
  LoginResponse,
} from '../../services/user-service/user.interface';
import { Role } from '../../services/job-roles-service/job-roles.service';
/**
 * RegistrationComponent handles user registration.
 */
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule,
    RoleSelectionComponent,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../../styles/form-styles.css'],
})
export class RegistrationComponent implements OnInit {
  personalDetailsGroup: FormGroup; // FormGroup for personal details
  accountDetailsGroup: FormGroup; // FormGroup for account details

  constructor(
    private _formBuilder: FormBuilder, // FormBuilder for creating form groups
    private userService: UserService, // Service for user-related operations
    private router: Router, // Router for navigation
    private snackbarService: SnackbarService // Snackbar for displaying messages
  ) {}

  ngOnInit(): void {
    // Initialize the personal details form group with validators
    this.personalDetailsGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      jobRoleId: [null, Validators.required],
    });

    // Initialize the account details form group with validators
    this.accountDetailsGroup = this._formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Handles the event when a role is selected in the RoleSelectionComponent.
  onRoleSelected(role: Role): void {
    this.personalDetailsGroup.controls['jobRoleId'].setValue(role.id);
  }

  // Submits the registration form.
  submitRegistration() {
    // Check for invalid input in personal details form group.
    if (this.personalDetailsGroup.invalid) {
      this.snackbarService.open(
        'Please correct the errors in your personal details.',
        'error'
      );
      return;
    }

    // Check for invalid input in account details form group.
    if (this.accountDetailsGroup.invalid) {
      this.snackbarService.open(
        'Please correct the errors in your account details.',
        'error'
      );
      return;
    }

    // Combines values from both form groups into one object
    const userData: UserRegistrationData = {
      ...this.personalDetailsGroup.value,
      ...this.accountDetailsGroup.value,
    };

    // Attempts to register the user with the combined form data.
    this.userService.registerUser(userData).subscribe({
      next: (response: LoginResponse) => {
        this.snackbarService.open(response.message, 'success');
        this.router.navigate(['./login']);
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Registration failed';
        this.snackbarService.open(errorMessage, 'error');
      },
    });
  }
}
