import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service/user-service';
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
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles/form-styles.css'],
})
export class LoginComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitLogin() {
    if (this.firstFormGroup.invalid) {
      console.error('Form is invalid');
      return;
    }

    const userData = {
      ...this.firstFormGroup.value,
    };

    this.userService.loginUser(userData).subscribe({
      next: (response) => {
        console.log('User logged in', response);
        this.snackBar.open('Logged In Successfully!', 'Close', {
          duration: 4000,
          verticalPosition: 'top',
        });
        this.router.navigate(['./']);
      },
      error: (error) => {
        console.log('Error Logging In', error.error.message);
        const errorMessage = error.error?.message || 'Logging In failed';
        this.snackBar.open(error.error.message, 'Close', {
          duration: 4000,
          verticalPosition: 'top',
        });
      },
    });
  }
}
