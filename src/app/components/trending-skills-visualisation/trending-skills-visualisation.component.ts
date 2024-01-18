import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { SkillsService } from '../../services/role-skills-service/role-skills.service';
import { CommonModule } from '@angular/common';

type CategoryColorKey =
  | 'Language'
  | 'Library'
  | 'Tool'
  | 'Platform'
  | 'Methodology';
const categoryColors: Record<CategoryColorKey, string> = {
  Language: '#FF6384',
  Library: '#36A2EB',
  Tool: '#FFCD56',
  Platform: '#4BC0C0',
  Methodology: '#9966FF',
};

@Component({
  selector: 'app-trending-skills-visualisation',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './trending-skills-visualisation.component.html',
  styleUrls: ['./trending-skills-visualisation.component.css'],
})
export class TrendingSkillsVisualisationComponent implements OnChanges {
  @Input() selectedRoleId: number | null = null;
  @Input() category: CategoryColorKey | null = null;
  public barChartData: ChartDataset[] = [
    { data: [], label: '', backgroundColor: [] },
  ];
  public barChartLabels: string[] = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        display: true,
        beginAtZero: true,
      },
      y: {
        display: true,
        afterFit: (scaleInstance) => {
          scaleInstance.width = 100;
        },
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
            (response) =>
              response.skill.skillName.charAt(0).toUpperCase() +
              response.skill.skillName.slice(1)
          );
          this.barChartData[0].data = responses.map(
            (response) => response.frequency
          );
          this.barChartData[0].backgroundColor = this.barChartLabels.map(
            (label) =>
              this.category ? categoryColors[this.category] : '#CCCCCC'
          );
        },
        (error) => {
          console.error('Error retrieving skills data:', error);
        }
      );
    }
  }
}
