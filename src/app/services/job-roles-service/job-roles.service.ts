import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private rolesUrl = `${environment.apiUrl}/api/roles/allRoles`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<{ id: number; roleTitle: string }[]> {
    return this.http.get<{ id: number; roleTitle: string }[]>(this.rolesUrl);
  }
}
