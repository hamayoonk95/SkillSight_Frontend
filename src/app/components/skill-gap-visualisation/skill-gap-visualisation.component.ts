import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skill-gap-visualisation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-gap-visualisation.component.html',
  styleUrl: './skill-gap-visualisation.component.css',
})
export class SkillGapVisualisationComponent implements OnInit {
  skillsGap: any;
  categories: string[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Retrieve the state
      const state = window.history.state;

      if (state.skillsGap) {
        this.skillsGap = state.skillsGap;
        this.categories = state.categories;
      }
    });
  }
}
