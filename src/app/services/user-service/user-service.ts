import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) {}

  registerUser(userData: any) {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, userData);
  }

  loginUser(userData: any) {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, userData);
  }
}
