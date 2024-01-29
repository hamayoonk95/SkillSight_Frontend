import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from './job-roles.service';

@Injectable({
  providedIn: 'root'
})
export class RoleStateService {
  private selectedRoleSource = new BehaviorSubject<Role | null>(null);
  selectedRole$ = this.selectedRoleSource.asObservable();

  setSelectedRole(role: Role | null) {
    this.selectedRoleSource.next(role);
  }

  clearSelectedRole() {
    this.selectedRoleSource.next(null);
  }
}
