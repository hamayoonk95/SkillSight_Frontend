// Angular Core imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing child components
import { QuestionnaireComponent } from '../../components/questionnaire/questionnaire.component';
import { RoleRoadmapComponent } from '../../components/role-roadmap/role-roadmap.component';

// Interface for Matched role data
import { MatchedRoleData } from '../../services/role-match-service/role-profiling.interface';

/**
 * RoleProfilingComponent orchestrates the role profiling process.
 * Handles data flow between the questionnaire and role roadmap components.
 */
@Component({
  selector: 'app-role-profiling',
  standalone: true,
  imports: [CommonModule, QuestionnaireComponent, RoleRoadmapComponent],
  templateUrl: './role-profiling.component.html',
  styleUrl: './role-profiling.component.css',
})
export class RoleProfilingComponent {
  matchedRoleData: MatchedRoleData; // Holds the data for the matched role

  /**
   * Handles the event when a role is matched from the questionnaire component.
   * @param matchedRole The data of the matched role emitted from the questionnaire.
   */
  onRoleMatched(matchedRole: MatchedRoleData) {
    this.matchedRoleData = matchedRole; // Assings the matched role data for displaying in role roadmap
  }
}
