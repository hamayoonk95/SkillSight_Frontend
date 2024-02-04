// Angular Core imports
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface for matched role data
import { MatchedRoleData } from '../../services/role-match-service/role-profiling.interface';

/**
 * RoleRoadmapComponent - Responsible for displaying the roadmap and detailed information
 * of a matched role. It receives the role data as input from a parent component.
 */
@Component({
  selector: 'app-role-roadmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-roadmap.component.html',
  styleUrl: './role-roadmap.component.css',
})
export class RoleRoadmapComponent {
  @Input() roleData: MatchedRoleData; // Input property to receive role data from the parent component
}
