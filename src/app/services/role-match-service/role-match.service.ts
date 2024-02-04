// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS import
import { Observable } from 'rxjs';

// Environment import
import { environment } from '../../../environments/environment';

// Interface for matched role
import { MatchedRoleData } from './role-profiling.interface';

/**
 * RoleMatchService is responsible for submitting user responses and retrieving matched role data.
 */
@Injectable({
  providedIn: 'root',
})
export class RoleMatchService {
  private apiUrl = `${environment.apiUrl}/api/rolematching/match`; // API base URL
  constructor(private http: HttpClient) {}

  /**
   * Sends user answers to the RoleMatching API and receives the matched role data.
   * @param answers The answers provided by the user in the questionnaire.
   * @returns Observable of MatchedRoleData, the data structure for the matched role.
   */
  public matchRoles(answers: any): Observable<MatchedRoleData> {
    return this.http.post<MatchedRoleData>(this.apiUrl, answers); // POST request to the API
  }
}
