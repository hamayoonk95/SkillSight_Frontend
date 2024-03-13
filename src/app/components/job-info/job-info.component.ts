import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  JobInfoService,
  JobInfo,
} from '../../services/job-info-service/job-info.service';

/**
 * JobInfoComponent is responsible for displaying role related information.
 * It listens to changes in selectedRoleId and selectedRoleTitle and fetches job information accordingly.
 */
@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.css',
})
export class JobInfoComponent implements OnChanges {
  @Input() selectedRoleId: number | null = null; // Input for the selected role ID
  @Input() selectedRoleTitle: string | null = null; // Input for the selected role title
  public jobInfo: JobInfo; // Holds the job information fetched from the JobInfoService
  @Input() startDate;
  @Input() endDate;

  constructor(private jobInfoService: JobInfoService) {}

  /**
   * ngOnChanges lifecycle hook to detect changes in inputs and fetch job information accordingly.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedRoleId'] ||
      changes['startDate'] ||
      changes['endDate']
    ) {
      this.fetchJobInfo();
    }
  }

  fetchJobInfo(): void {
    if (this.selectedRoleId && this.startDate && this.endDate) {
      this.jobInfoService
        .getJobInfo(this.selectedRoleId, this.startDate, this.endDate)
        .subscribe(
          (data: JobInfo) => {
            if (data !== null) {
              this.jobInfo = data;
            } else {
              this.jobInfo = undefined;
            }
          },
          (error) => {
            console.error('Error fetching job info:', error);
          }
        );
    }
  }
}
