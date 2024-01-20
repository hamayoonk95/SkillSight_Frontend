// Angular core imports
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  FormArray,
  Validators
} from '@angular/forms';

// Angular Material imports
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatStepperModule],
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css', '../../styles/form-styles.css'],
})
export class SkillFormComponent implements OnInit {
  @Input() skillsForSelectedRole: any;
  skillFormGroup: FormGroup;
  categoryKeys: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skillsForSelectedRole'] && this.skillsForSelectedRole) {
      this.initializeForm();
    }
  }

  ngOnInit(): void {
    this.skillFormGroup = this.fb.group({});
  }

  initializeForm(): void {
    const categoryGroups = Object.keys(this.skillsForSelectedRole).reduce(
      (acc, category) => {
        const categorySkills = this.skillsForSelectedRole[category];
        const controls = categorySkills.reduce((acc, skill) => {
          const safeSkillName = skill.skill.skillName.replace(/\./g, '_');
          acc[safeSkillName] = new FormControl(false);
          return acc;
        }, {});

        acc[category] = this.fb.group(controls);
        // console.log(acc);

        return acc;
      },
      {}
    );

    this.skillFormGroup = this.fb.group(categoryGroups);
    this.categoryKeys = Object.keys(categoryGroups);
  }

  submitSkills() {}
}
