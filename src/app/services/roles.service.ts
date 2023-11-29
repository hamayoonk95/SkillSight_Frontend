import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private rolesUrl = 'http://localhost:5000/api/roles/allRoles'; // URL to web API

  constructor(private http: HttpClient) {}

  getRoles(): Observable<{ id: number; roleTitle: string }[]> {
    return this.http.get<{ id: number; roleTitle: string }[]>(this.rolesUrl);
  }
}
