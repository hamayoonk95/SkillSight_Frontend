// Angular core imports
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
import { MatButtonModule } from '@angular/material/button';


import { SkillsByCategory } from '../../services/role-skills-service/role-skills.service';

/**
 * SkillFormComponent is responsible for displaying and handling a dynamic form
 * for skill selection based on the selected role. It also calculates the skill gap
 * and navigates to the skill gap visualisation component.
 */
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
    MatButtonModule,
  ],
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css', '../../styles/form-styles.css'],
})
export class SkillFormComponent {
  @Input() skillsForSelectedRole: SkillsByCategory; // Skills data input from parent component
  skillFormGroup: FormGroup; // Form group for all skills
  categoryKeys: string[] = []; // Array of category names
  controlNames: string[] = []; // Array of form control names
  skillsOptions: { [category: string]: string[] } = {};

  constructor(private fb: FormBuilder, private router: Router) {
    this.skillFormGroup = this.fb.group({}); // Initialize the form group
  }

  ngOnChanges(changes: SimpleChanges): void {
    // React to changes in the input property
    if (changes['skillsForSelectedRole'] && this.skillsForSelectedRole) {
      this.initializeForm();
    }
  }

  /**
   * Initializes the form controls based on the skills for the selected role.
   */
  initializeForm(): void {
    // Resetting form options and categories
    this.skillsOptions = {};
    this.categoryKeys = Object.keys(this.skillsForSelectedRole);

    // Creating form controls for each skill category
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

  /**
   * Submits the selected skills and calculates the skill gap.
   */
  submitSkills() {
    // Retrieving selected skills from the form
    const selectedSKills = this.skillFormGroup.value;

    // Calculating the skill gap
    const skillsGap = this.calculateSkillsGap(
      selectedSKills,
      this.skillsForSelectedRole
    );

    // Navigating to the skill gap visualisation with calculated data
    this.router.navigate(['/skill-gap-visualisation'], {
      state: {
        skillsGap,
        categories: this.categoryKeys,
        skillsForSelectedRole: this.skillsForSelectedRole,
      },
    });
  }

  /**
   * Calculates the skills gap based on selected skills and required skills for the role.
   * @param selectedSkills The skills selected by the user.
   * @param skillsForSelectedRole The required skills for the selected role.
   * @returns An object representing the skills gap.
   */
  calculateSkillsGap(selectedSkills: SkillsByCategory, skillsForSelectedRole: any): SkillsByCategory {
    let skillsGap = {};

    // Looping through each category to find missing skills
    this.categoryKeys.forEach((category) => {
      const requiredSkills = skillsForSelectedRole[category].map(
        (skill) => skill.skill.skillName
      );
      const selectedCategorySkills = selectedSkills[category] || [];
      const missingSkills = requiredSkills.filter(
        (skill) => !selectedCategorySkills.includes(skill)
      );

      // Adding missing skills to the skills gap if any
      if (missingSkills.length > 0) {
        skillsGap[category] = missingSkills;
      }
    });

    return skillsGap;
  }
}
