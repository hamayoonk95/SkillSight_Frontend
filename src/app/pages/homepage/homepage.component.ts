import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';
import { TrendingSkillsVisualisationComponent } from '../../components/trending-skills-visualisation/trending-skills-visualisation.component';
import { JobInfoComponent } from '../../components/job-info/job-info.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RoleSelectionComponent,
    TrendingSkillsVisualisationComponent,
    JobInfoComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  selectedRoleId: number | null = 1;
  selectedRoleTitle: string | null = 'Software Developer';

  onRoleSelected(roleData: { id: number; title: string }): void {
    this.selectedRoleId = roleData.id;
    this.selectedRoleTitle = roleData.title;
  }
}
