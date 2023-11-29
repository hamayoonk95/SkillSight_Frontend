import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = 'http://localhost:5000/api/roles';

  constructor(private http: HttpClient) {}

  getSkillsForRole(roleId: number): Observable<any[]> {
    const url = `http://localhost:5000/api/roles/${roleId}/skills`;
    return this.http.get<any[]>(url);
  }
}
