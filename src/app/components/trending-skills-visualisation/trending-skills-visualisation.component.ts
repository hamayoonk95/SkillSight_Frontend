import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
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
  @Input() category: string | null = null;
  public barChartData: ChartDataset[] = [{ data: [], label: '' }];
  public barChartLabels: string[] = []; // Changed to string array
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
      this.SkillsService.getSkillsForRole(this.selectedRoleId).subscribe(
        (data) => {
          this.processData(data);
        },
        (error) => {
          console.error('Error retrieving skills data:', error);
        }
      );
    }
  }

  private processData(data: any[]): void {
    let filteredData = data.filter(
      (d) =>
        d.skill.type.typeName.toUpperCase() === this.category?.toUpperCase()
    );

    filteredData = filteredData
      .sort((a, b) => b.frequency - a.frequency)
      .slice(0, 20);
    this.barChartLabels = filteredData.map((d) => d.skill.skillName);
    this.barChartData[0].data = filteredData.map((d) => d.frequency);
  }
}
