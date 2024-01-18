import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user-service/user-service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    RouterModule,
    RoleSelectionComponent,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../../styles/form-styles.css'],
})
export class RegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      jobRoleId: [null, Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onRoleSelected(role: { id: number; title: string }): void {
    this.firstFormGroup.controls['jobRoleId'].setValue(role.id);
  }

  submitRegistration() {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      console.error('Form is invalid');
      return;
    }

    const userData = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
    };

    this.userService.registerUser(userData).subscribe({
      next: (response) => {
        console.log('User registered', response);
        this.snackBar.open('Registration Successful', 'Close', {
          duration: 4000,
          verticalPosition: 'top',
        });
        this.router.navigate(['./login']);
      },
      error: (error) => {
        console.error('Registration error', error.error.message);
        const errorMessage = error.error?.message || 'Registration failed';
        this.snackBar.open(error.error.message, 'Close', {
          duration: 4000,
          verticalPosition: 'top',
        });
      },
    });
  }
}
