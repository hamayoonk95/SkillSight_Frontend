// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS imports
import { Observable } from 'rxjs';

// Environment import
import { environment } from '../../../environments/environment';

// Interface definition for SkillResponse
export interface SkillResponse {
  skill: {
    skillName: string;
  };
  frequency: number;
}

/**
 * SkillsService is responsible for fetching skills data for roles from the server.
 */
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = `${environment.apiUrl}/api/roles`;

  constructor(private http: HttpClient) {}

  /**
   * Fetches skills data for a specific role and category.
   * @param roleId - The ID of the role for which to fetch skills data.
   * @param category - The category of skills to fetch.
   * @returns An Observable containing an array of SkillResponse.
   */
  getSkillsForRole(roleId: number, category: string | null): Observable<SkillResponse[]> {
    const url = `${this.apiUrl}/${roleId}/skills/${category}`;
    return this.http.get<SkillResponse[]>(url);
  }
}
