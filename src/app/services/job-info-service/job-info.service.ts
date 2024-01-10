import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobInfoService {
  private apiUrl = `${environment.apiUrl}/api/roles`;

  constructor(private http: HttpClient) {}

  getJobInfo(
    roleId: number
  ): Observable<{ jobCount: number; cutOffDate: Date }> {
    const url = `${this.apiUrl}/${roleId}/jobInfo`;
    return this.http.get<{ jobCount: number; cutOffDate: Date }>(url);
  }
}
