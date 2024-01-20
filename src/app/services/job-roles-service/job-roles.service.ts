// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS imports
import { Observable } from 'rxjs';

// Environment import
import { environment } from '../../../environments/environment';

// Interface definition for Role
export interface Role {
  id: number;
  roleTitle: string;
}

/**
 * RolesService is responsible for fetching role data from the server.
 */
@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private rolesUrl = `${environment.apiUrl}/api/roles/allRoles`;

  constructor(private http: HttpClient) {}

  /**
   * Fetches a list of roles.
   * @returns An Observable containing an array of roles.
   */
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl);
  }
}
