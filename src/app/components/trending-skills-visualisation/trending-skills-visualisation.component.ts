import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { SkillsService } from '../../services/role-skills-service/role-skills.service';
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
  @Input() category: string | null = null;
  public barChartData: ChartDataset[] = [{ data: [], label: '' }];
  public barChartLabels: string[] = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        display: true,
        beginAtZero: true,
      },
      y: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  constructor(private SkillsService: SkillsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.category && this.selectedRoleId) {
      this.SkillsService.getSkillsForRole(
        this.selectedRoleId,
        this.category
      ).subscribe(
        (responses) => {
          this.barChartLabels = responses.map(
            (response) => response.skill.skillName
          );
          this.barChartData[0].data = responses.map(
            (response) => response.frequency
          );
        },
        (error) => {
          console.error('Error retrieving skills data:', error);
        }
      );
    }
  }
}
