import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { SkillsService } from '../../services/skills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending-skills-visualisation',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './trending-skills-visualisation.component.html',
  styleUrls: ['./trending-skills-visualisation.component.css'],
})
export class TrendingSkillsVisualisationComponent implements OnChanges {
  @Input() selectedRoleId: number | null = null;
  skillsData: any[] = [];
  bubbleChartData: ChartDataset<'bubble'>[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {},
      y: {},
    },
  };
  bubbleChartType: ChartType = 'bubble';

  constructor(private SkillsService: SkillsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedRoleId'] && this.selectedRoleId) {
      this.SkillsService.getSkillsForRole(this.selectedRoleId).subscribe(
        (data) => {
          this.bubbleChartData = data.map((skill) => ({
            label: skill.skill.skillName,
            data: [
              {
                x: skill.skill.id,
                y: skill.frequency,
                r: Math.sqrt(skill.frequency),
              },
            ],
          }));
        },
        (error) => {
          console.error('There was an error retrieving skills data!', error);
        }
      );
    }
  }
}
