// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// RxJS import
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

export interface SkillsByCategory {
  [category: string]: SkillResponse[];
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
   * @param startDate - The start date for filtering skills data.
   * @param endDate - The end date for filtering skills data.
   * @param category - The category of skills to fetch.
   * @returns An Observable containing an array of SkillResponse.
   */
  getSkillsForRole(
    roleId: number,
    category?: string | null,
    startDate?: Date,
    endDate?: Date
  ): Observable<SkillResponse[]> {
    let params = new HttpParams();

    // Only append startDate and endDate to the params if they are provided
    if (startDate) {
      params = params.append('startDate', startDate.toISOString());
    }
    if (endDate) {
      params = params.append('endDate', endDate.toISOString());
    }

    return this.http.get<SkillResponse[]>(
      `${this.apiUrl}/${roleId}/skills/${category}`,
      { params }
    );
  }
}
