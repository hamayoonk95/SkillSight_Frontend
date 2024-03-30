// warm-up.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WarmUpService {
  private apiUrl = `${environment.apiUrl}/home`;

  constructor(private http: HttpClient) {}

  /**
   * Sends a warm-up request to the backend.
   */
  warmUpBackend() {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
