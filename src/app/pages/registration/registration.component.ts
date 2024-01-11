import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RoleSelectionComponent,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
    });

    this.secondFormGroup = this._formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  onRoleSelected(role: { id: number; title: string }): void {
    console.log('Selected Role:', role);
  }

  submitRegistration() {
    // Handle the form submission logic
  }
}
