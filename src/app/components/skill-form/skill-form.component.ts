// Angular core imports
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

// Angular Material imports
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css', '../../styles/form-styles.css'],
})
export class SkillFormComponent implements OnInit {
  @Input() skillsForSelectedRole: any; // Skills data input from parent component
  @Output() skillsSubmitted = new EventEmitter<any>();
  skillFormGroup: FormGroup; // Form group for all skills
  categoryKeys: string[] = []; // Array of category names
  controlNames: string[] = []; // Array of form control names
  skillsOptions: { [category: string]: string[] } = {};

  constructor(private fb: FormBuilder) {
    this.skillFormGroup = this.fb.group({}); // Initialize the form group
  }

  ngOnChanges(changes: SimpleChanges): void {
    // React to changes in the input property
    if (changes['skillsForSelectedRole'] && this.skillsForSelectedRole) {
      this.initializeForm();
    }
  }

  ngOnInit(): void {}

  /**
   * Initializes the form controls based on the skills for the selected role.
   */
  initializeForm(): void {
    this.skillsOptions = {};
    this.categoryKeys = Object.keys(this.skillsForSelectedRole);

    this.categoryKeys.forEach((category) => {
      this.skillsOptions[category] = this.skillsForSelectedRole[category].map(
        (skill) => skill.skill.skillName
      );

      // Create a form control for each category with an empty array as the initial value
      this.skillFormGroup.addControl(category, new FormControl([]));
    });
  }

  /**
   * Generates a safe name for form control based on category and skill name.
   * @param category - The category of the skill.
   * @param skillName - The name of the skill.
   * @returns A string representing the form control name.
   */
  getControlName(category: string, skillName: string): string {
    const safeCategory = category.replace(/\s+/g, '_'); // Replace spaces with underscores
    const safeSkillName = skillName.replace(/\s+/g, '_').replace(/\./g, '_'); // Replace spaces and dots with underscores
    return `${safeCategory}__${safeSkillName}`; // Double underscore as a separator
  }

  /**
   * Retrieves control names for a given category.
   * @param category - The category to get control names for.
   * @returns An array of control names.
   */
  getControlNamesForCategory(category: string): string[] {
    const categoryPrefix = category.replace(/\s+/g, '_') + '__';
    return this.controlNames.filter((name) => name.startsWith(categoryPrefix));
  }

  /**
   * Converts a control name to a human-readable skill name.
   * @param controlName - The name of the form control.
   * @returns A string representing the human-readable skill name.
   */
  getSkillName(controlName: string): string {
    const parts = controlName.split('__'); // Split by double underscore
    parts.shift(); // Remove the category part
    return parts.join(' ').replace(/_/g, ' '); // Replace underscores with spaces
  }

  submitSkills() {
    this.skillsSubmitted.emit(this.skillFormGroup.value);
    // console.log(this.skillFormGroup.value);
    // console.log(this.skillsForSelectedRole);
  }
}
