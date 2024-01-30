import { Component } from '@angular/core';
import { QuestionnaireComponent } from '../../components/questionnaire/questionnaire.component';

@Component({
  selector: 'app-role-profiling',
  standalone: true,
  imports: [QuestionnaireComponent],
  templateUrl: './role-profiling.component.html',
  styleUrl: './role-profiling.component.css',
})
export class RoleProfilingComponent {}
