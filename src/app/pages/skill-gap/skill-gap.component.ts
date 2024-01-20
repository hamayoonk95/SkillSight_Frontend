import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// App imports
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';
import { Role } from '../../services/job-roles-service/job-roles.service';
import {
  SkillResponse,
  SkillsService,
} from '../../services/role-skills-service/role-skills.service';
import { SkillFormComponent } from '../../components/skill-form/skill-form.component';
/**
 * SkillGapComponent, performs skill-gap analysis.
 */
@Component({
  selector: 'app-skill-gap',
  standalone: true,
  imports: [CommonModule, RoleSelectionComponent, SkillFormComponent],
  templateUrl: './skill-gap.component.html',
  styleUrl: './skill-gap.component.css',
})
export class SkillGapComponent implements OnInit {
  selectedRole: Role | null = null;
  skillsForSelectedRole = {};
  allSkillsLoaded = false;

  categories: string[] = [
    'Language',
    'Library',
    'Tool',
    'Platform',
    'Methodology',
  ];

  constructor(private skillService: SkillsService) {}

  ngOnInit(): void {}

  onRoleSelected(selectedRole: Role): void {
    this.selectedRole = selectedRole;
    this.fetchSkillsForSelectedRole(this.selectedRole.id);
  }

  fetchSkillsForSelectedRole(roleId: number): void {
    let loadedCategories = 0;
    this.categories.forEach((category) => {
      this.skillService.getSkillsForRole(roleId, category).subscribe({
        next: (skills: SkillResponse[]) => {
          this.skillsForSelectedRole[category] = skills;
          loadedCategories++;
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

  // checkIfAllSkillsLoaded() {
  //   this.allSkillsLoaded = this.categories.every(
  //     (category) => this.skillsLoaded[category]
  //   );
  // }

  // onSkillSelectionUpdate(category: string, selectedSkills: string[]) {
  //   console.log(`Selected skills for ${category}:`, selectedSkills);
  //   // Handle the selected skills here (store in a service or component state)
  // }
}
