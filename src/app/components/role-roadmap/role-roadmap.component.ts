// Angular Core imports
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';

// Interface for matched role data
import { MatchedRoleData } from '../../services/role-match-service/role-profiling.interface';

/**
 * RoleRoadmapComponent - Responsible for displaying the roadmap and detailed information
 * of a matched role. It receives the role data as input from a parent component.
 */
@Component({
  selector: 'app-role-roadmap',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './role-roadmap.component.html',
  styleUrl: './role-roadmap.component.css',
})
export class RoleRoadmapComponent implements OnInit {
  @Input() roleData: MatchedRoleData; // Input property to receive role data from the parent component
  colors: string[] = ['#FF5733', '#CDDC39', '#9C27B0', '#00BCD4', '#FFC107'];

  ngOnInit(): void {
    console.log(this.roleData);

    if (this.roleData && this.roleData.topSkills) {
      this.roleData.topSkills.forEach((skillCategory: any, index: number) => {
        const colorIndex = index % this.colors.length;
        skillCategory.headerColor = this.colors[colorIndex];
        skillCategory.circleColor = this.colors[colorIndex];
      });
    }
  }

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.roleData = navigation.extras.state['matchedRole'];
    }
  }
}
