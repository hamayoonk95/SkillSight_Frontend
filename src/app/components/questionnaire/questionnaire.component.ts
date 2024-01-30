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
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatRadioModule,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['../../styles/form-styles.css', './questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  firstGroup: FormGroup; // FormGroup for personal details
  secondGroup: FormGroup; // FormGroup for account details

  constructor(
    private _formBuilder: FormBuilder, // FormBuilder for creating form groups
    private router: Router // Router for navigation
  ) {}

  ngOnInit(): void {
    this.firstGroup = this._formBuilder.group({
      question1: [''],
      question2: [''],
      question3: [''],
      question4: [''],
      question5: [''],
      question6: [''],
    });

    this.secondGroup = this._formBuilder.group({
      question7: [''],
      question8: [''],
      // question5: [''],
    });
  }
}
