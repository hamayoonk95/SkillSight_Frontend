// Angular core imports
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

// Chart.js and ng2-charts imports
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

// App imports
import {
  SkillsService,
  SkillResponse,
} from '../../services/role-skills-service/role-skills.service';
import { categoryColors, CategoryColorKey } from './category-colors';
import { Category } from '../../pages/homepage/category.enum';

/**
 * TrendingSkillsVisualisationComponent visualises the trending skills in different categories
 * for a selected role. It displays the data in a bar chart format.
 */
@Component({
  selector: 'app-trending-skills-visualisation',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './trending-skills-visualisation.component.html',
  styleUrls: ['./trending-skills-visualisation.component.css'],
})
export class TrendingSkillsVisualisationComponent implements OnChanges {
  @Input() selectedRoleId: number | null = null; // Input for the selected role ID
  @Input() category: CategoryColorKey = null; // Input for the selected category
  public barChartData: ChartDataset[] = [
    { data: [], label: '', backgroundColor: [] },
  ];

  // Chart data and options
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

  constructor(private SkillsService: SkillsService) {} // Injecting the SkillsService

  // Fetch and process skill data on input changes
  ngOnChanges(changes: SimpleChanges): void {
    // Check if both category and selectedRoleId are valid
    if (this.category && this.selectedRoleId) {
      // Fetch skills data for the selected role and category
      this.SkillsService.getSkillsForRole(
        this.selectedRoleId,
        this.category
      ).subscribe(
        (responses: SkillResponse[]) => {
          // Set the bar chart labels to skill names with the first letter capitalised
          this.barChartLabels = responses.map(
            (response: SkillResponse) =>
              response.skill.skillName.charAt(0).toUpperCase() +
              response.skill.skillName.slice(1)
          );

          // Set the bar chart data to the frequency of each skill
          this.barChartData[0].data = responses.map(
            (response) => response.frequency
          );

          // Set the background color for each data point in the bar chart
          this.barChartData[0].backgroundColor = this.barChartLabels.map(
            () => categoryColors[this.category] || '#CCCCCC'
          );
        },
        (error) => {
          console.error('Error retrieving skills data:', error);
        }
      );
    }
  }

   getPluralCategory(category: CategoryColorKey): string {
    const plurals = {
      [Category.Language]: 'Languages',
      [Category.Library]: 'Libraries',
      [Category.Tool]: 'Tools',
      [Category.Platform]: 'Platforms',
      [Category.Methodology]: 'Methodologies',
    };

    return plurals[category] || category;
  }
}
