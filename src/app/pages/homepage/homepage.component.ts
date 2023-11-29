import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';
import { TrendingSkillsVisualisationComponent } from '../../components/trending-skills-visualisation/trending-skills-visualisation.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RoleSelectionComponent,
    TrendingSkillsVisualisationComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  selectedRoleId: number | null = null;
}
