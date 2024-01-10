import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobInfoService } from '../../services/job-info-service/job-info.service';

@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.css',
})
export class JobInfoComponent implements OnChanges {
  @Input() selectedRoleId: number | null = null;
  public jobInfo: any;

  constructor(private jobInfoService: JobInfoService) {}

  ngOnChanges(): void {
    if (this.selectedRoleId) {
      this.jobInfoService.getJobInfo(this.selectedRoleId).subscribe(
        (data) => {
          this.jobInfo = data;
        },
        (error) => {
          console.error('Error fetching job info:', error);
        }
      );
    }
  }
}
