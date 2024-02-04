// Angular Core import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// App imports
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';
import { Role } from '../../services/job-roles-service/job-roles.service';
import {
  SkillResponse,
  SkillsByCategory,
  SkillsService,
} from '../../services/role-skills-service/role-skills.service';
import { SkillFormComponent } from '../../components/skill-form/skill-form.component';

/**
 * SkillGapComponent - Responsible for managing the skill gap analysis process.
 * Handles role selection and fetches skills data for the selected role,
 * then passes this data to the SkillFormComponent for further processing.
 */
@Component({
  selector: 'app-skill-gap',
  standalone: true,
  imports: [CommonModule, RoleSelectionComponent, SkillFormComponent],
  templateUrl: './skill-gap.component.html',
  styleUrl: './skill-gap.component.css',
})
export class SkillGapComponent {
  selectedRole: Role | null = null; // Holds the currently selected role
  skillsForSelectedRole : SkillsByCategory = {}; // Stores skills data for the selected role, categorized by type
  allSkillsLoaded : boolean = false; // Flag to indicate if all skills data has been loaded

  // Predefined categories of skills
  categories: string[] = [
    'Language',
    'Library',
    'Tool',
    'Platform',
    'Methodology',
  ];

  constructor(private skillService: SkillsService) {}

  /**
   * Handles the event when a role is selected.
   * Fetches skills for the selected role and resets the form if a different role is selected.
   * @param selectedRole - The role selected by the user.
   */
  onRoleSelected(selectedRole: Role): void {
    if (!this.selectedRole || this.selectedRole.id !== selectedRole.id) {
      this.selectedRole = selectedRole;
      this.resetSkillForm();
      this.fetchSkillsForSelectedRole(this.selectedRole.id);
    }
  }

  /**
   * Resets the skill form and indicates that skills are not loaded.
   */
  resetSkillForm(): void {
    this.skillsForSelectedRole = {}; 
    this.allSkillsLoaded = false; 
  }

  /**
   * Fetches skills data for the selected role from the server.
   * Populates the skills data for each category.
   * @param roleId - The ID of the selected role.
   */
  fetchSkillsForSelectedRole(roleId: number): void {
    let loadedCategories = 0;

    // Iterating over each skill category to fetch data
    this.categories.forEach((category) => {
      this.skillService.getSkillsForRole(roleId, category).subscribe({
        next: (skills: SkillResponse[]) => {
          this.skillsForSelectedRole[category] = skills;
          loadedCategories++;
          // Check if all categories have been loaded
          if (loadedCategories == this.categories.length) {
            this.allSkillsLoaded = true;
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}
