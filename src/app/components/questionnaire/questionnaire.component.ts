// Angular core imports
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

// Importing custom services and data.
import { RoleMatchService } from '../../services/role-match-service/role-match.service';
import { questionnaireData } from './questionnaire-data';

// Interface for matched role data
import { MatchedRoleData } from '../../services/role-match-service/role-profiling.interface';
import { SnackbarService } from '../../services/snack-bar/snack-bar.service';

/**
 * Component for rendering and handling a dynamic questionnaire form.
 * Emits the matched role data upon form submission.
 */
@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['../../styles/form-styles.css', './questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaireData = questionnaireData; // Data for rendering questionnaire
  questionnaireForm: FormGroup; // FormGroup to manage questionnaire form

  constructor(
    private _formBuilder: FormBuilder, // FormBuilder for creating form groups
    private roleMatchService: RoleMatchService, // RoleMatchService to post data to API
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  /**
   * Initializes the questionnaire form with dynamic form controls based on questionnaire data.
   */
  ngOnInit(): void {
    // Constructing form controls dynamically based on questionnaire data
    const formControls = this.questionnaireData.reduce((groupAcc, group) => {
      const controls = group.questions.reduce((questionAcc, question) => {
        questionAcc[question.formControlName] = ['', Validators.required];
        return questionAcc;
      }, {});

      return { ...groupAcc, ...controls };
    }, {});

    this.questionnaireForm = this._formBuilder.group(formControls);
  }

  /**
   * Submits the questionnaire form and emits the matched role data.
   */
  submitQuestionnaire() {
    if (this.questionnaireForm.valid) {
      const answers = this.questionnaireForm.value;

      // Fetching matched role data based on form answers
      this.roleMatchService
        .matchRoles(answers)
        .subscribe((matchedRole: MatchedRoleData) => {
          this.router.navigate(['/role-roadmap'], { state: { matchedRole } });
        });
    } else {
      this.snackbarService.open(`You're missing some questions`, 'error');
    }
  }
}
