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
import { SkillGapVisualisationComponent } from '../../components/skill-gap-visualisation/skill-gap-visualisation.component';
/**
 * SkillGapComponent, performs skill-gap analysis.
 */
@Component({
  selector: 'app-skill-gap',
  standalone: true,
  imports: [
    CommonModule,
    RoleSelectionComponent,
    SkillFormComponent,
    SkillGapVisualisationComponent,
  ],
  templateUrl: './skill-gap.component.html',
  styleUrl: './skill-gap.component.css',
})
export class SkillGapComponent implements OnInit {
  selectedRole: Role | null = null;
  skillsForSelectedRole = {};
  allSkillsLoaded = false;
  skillsGap: any;

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
    if (!this.selectedRole || this.selectedRole.id !== selectedRole.id) {
      this.selectedRole = selectedRole;
      this.resetSkillForm(); // Add this line
      this.fetchSkillsForSelectedRole(this.selectedRole.id);
    }
  }

  resetSkillForm(): void {
    // Reset the skill form
    this.skillsForSelectedRole = {}; // Reset the skills
    this.allSkillsLoaded = false; // Indicate that skills are not loaded
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

  handleSkillsSubmission(selectedSkills: any): void {
    this.skillsGap = this.processSkills(
      selectedSkills,
      this.skillsForSelectedRole
    );
  }

  processSkills(selectedSkills: any, skillsForSelectedRole: any): any {
    let skillsGap = {};
    this.categories.forEach((category) => {
      const requiredSkills = skillsForSelectedRole[category].map(
        (skill) => skill.skill.skillName
      );
      const selectedCategorySkills = selectedSkills[category] || [];
      const missingSkills = requiredSkills.filter(
        (skill) => !selectedCategorySkills.includes(skill)
      );
      if (missingSkills.length > 0) {
        skillsGap[category] = missingSkills;
      }
    });

    return skillsGap;
  }
}