// Angular Core Imports
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Angular Material imports
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

// Inteface for skills by category
import { SkillsByCategory } from '../../services/role-skills-service/role-skills.service';
import { CategoryStat, SkillGap } from './skill-gap.interface';

/**
 * SkillGapVisualisationComponent displays the skill gap analysis for the selected role.
 */
@Component({
  selector: 'app-skill-gap-visualisation',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTableModule,
    MatChipsModule,
  ],
  templateUrl: './skill-gap-visualisation.component.html',
  styleUrl: './skill-gap-visualisation.component.css',
})
export class SkillGapVisualisationComponent implements OnInit {
  // Data for skill gap analysis
  skillsGap: SkillGap;
  categories: string[];
  skillsForSelectedRole: SkillsByCategory;
  // Statistics for each category
  categoryStats: CategoryStat[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Retrieve the state passed from the previous component
      const state = window.history.state;

      // Initialise component data if state is available
      if (state.skillsGap && state.categories && state.skillsForSelectedRole) {
        this.skillsGap = state.skillsGap;
        this.categories = state.categories;
        this.skillsForSelectedRole = state.skillsForSelectedRole;
        this.generateCategoryStats();
      }
    });
  }

  // Generate statistics for each category based on the skill gap data
  generateCategoryStats() {
    this.categoryStats = this.categories.map((category) => {
      const totalSkills = this.skillsForSelectedRole[category].length;
      const missingSkills = this.skillsGap[category] || [];
      const knownSkills = totalSkills - missingSkills.length;
      const progressPercentage = (knownSkills / totalSkills) * 100;

      return {
        categoryName: category,
        totalSkills,
        knownSkills,
        progressPercentage,
        missingSkills,
      };
    });
  }

  // Determines if a skill is missing in a given category
  isSkillMissing(stat: CategoryStat, skill: any): boolean {
    return stat.missingSkills.includes(skill.skill.skillName);
  }
}
