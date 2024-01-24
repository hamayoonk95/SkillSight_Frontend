import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

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
  skillsGap: any;
  categories: string[];
  skillsForSelectedRole: any;
  categoryStats: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Retrieve the state
      const state = window.history.state;

      if (state.skillsGap && state.categories && state.skillsForSelectedRole) {
        this.skillsGap = state.skillsGap;
        this.categories = state.categories;
        this.skillsForSelectedRole = state.skillsForSelectedRole;
        this.generateCategoryStats();
      }
    });
  }

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

  isSkillMissing(stat: any, skill: any): boolean {
    return stat.missingSkills.includes(skill.skill.skillName);
  }
}
