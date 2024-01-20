// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS import
import { Observable } from 'rxjs';

// Environment import
import { environment } from '../../../environments/environment';

// Interface definition for JobInfo
export interface JobInfo {
  jobCount: number;
  cutOffDate: Date;
}

/**
 * JobInfoService is responsible for fetching job information from the server.
 */
@Injectable({
  providedIn: 'root',
})
export class JobInfoService {
  private apiUrl = `${environment.apiUrl}/api/roles`;

  constructor(private http: HttpClient) {}

  /**
   * Fetches job information for a specific role ID.
   * @param roleId - The ID of the role for which to fetch job information.
   * @returns An Observable containing the job information.
   */
  getJobInfo(roleId: number): Observable<JobInfo> {
    const url = `${this.apiUrl}/${roleId}/jobInfo`;
    return this.http.get<JobInfo>(url);
  }
}
