// Angular core imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// App imports
import { RoleSelectionComponent } from '../../components/role-selection/role-selection.component';
import { TrendingSkillsVisualisationComponent } from '../../components/trending-skills-visualisation/trending-skills-visualisation.component';
import { JobInfoComponent } from '../../components/job-info/job-info.component';
import { Category } from './category.enum';
import { Role } from '../../services/job-roles-service/job-roles.service';

/**
 * HomepageComponent, main landing page of the application.
 * It integrates various components like RoleSelectionComponent, TrendingSkillsVisualisationComponent, and JobInfoComponent.
 */
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
  Category = Category;
  selectedRoleId: number | null; // Holds the selected role ID
  selectedRoleTitle: string | null; // Holds the selected role title
  endDate = new Date();
  startDate = new Date(
    this.endDate.getFullYear(),
    this.endDate.getMonth() - 3,
    this.endDate.getDate()
  );

  disableNextPeriodButton = false;

  // Handles the event when a role is selected in the RoleSelectionComponent.
  onRoleSelected(roleData: Role): void {
    this.selectedRoleId = roleData.id;
    this.selectedRoleTitle = roleData.roleTitle;
  }

  // Shifts the period forward or backward by 3 months
  adjustPeriod(months: number): void {
    this.startDate = new Date(
      this.startDate.getFullYear(),
      this.startDate.getMonth() + months,
      this.startDate.getDate()
    );
    this.endDate = new Date(
      this.endDate.getFullYear(),
      this.endDate.getMonth() + months,
      this.endDate.getDate()
    );

    // Prevent going beyond the current date
    if (this.endDate > new Date()) {
      this.endDate = new Date();
      this.startDate = new Date(
        this.endDate.getFullYear(),
        this.endDate.getMonth() - 3,
        this.endDate.getDate()
      );
    }
  }
}
