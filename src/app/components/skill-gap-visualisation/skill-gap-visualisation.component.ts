import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-gap-visualisation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-gap-visualisation.component.html',
  styleUrl: './skill-gap-visualisation.component.css'
})
export class SkillGapVisualisationComponent implements OnInit {
  @Input() skillsGap: any;
  @Input() categories: string[];

  constructor() {}

  ngOnInit() {

  }
}
