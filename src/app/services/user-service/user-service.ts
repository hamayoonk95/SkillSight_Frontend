// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Environment import
import { environment } from '../../../environments/environment';
import {
  UserLoginData,
  LoginResponse,
  UserRegistrationData,
} from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) {}

  /**
   * Registers a new user.
   * @param userData - Data of the user to be registered.
   */
  registerUser(userData: UserRegistrationData) {
    const url = `${this.apiUrl}/register`;
    return this.http.post<LoginResponse>(url, userData);
  }

  /**
   * Logs in a user.
   * @param userData - Data of the user trying to log in.
   */
  loginUser(userData: UserLoginData) {
    const url = `${this.apiUrl}/login`;
    return this.http.post<LoginResponse>(url, userData);
  }
}
