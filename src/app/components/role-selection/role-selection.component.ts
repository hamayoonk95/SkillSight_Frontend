// Angular core imports
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material imports
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';

// App service imports
import {
  RolesService,
  Role,
} from '../../services/job-roles-service/job-roles.service';

/**
 * RoleSelectionComponent handles the functionality of selecting a role from a dropdown.
 * It emits an event with the selected role's information when a change is made.
 */
@Component({
  selector: 'app-role-selection',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './role-selection.component.html',
  styleUrl: './role-selection.component.css',
})
export class RoleSelectionComponent implements OnInit {
  @Output() roleSelected = new EventEmitter<Role>(); // Event emitter for selected role
  roles: Role[] = []; // Holds the list of roles
  selectedRoleId: number = null; // Selected role ID

  constructor(private rolesService: RolesService) {} // Injecting the RolesService

  // Fetch roles on component initialisation
  ngOnInit() {
    this.rolesService.getRoles().subscribe({
      next: (data: { id: number; roleTitle: string }[]) => {
        this.roles = data; // Assign fetched roles
      },
      error: (err) => {
        console.error('There was an error retrieving roles!', err);
      },
    });
  }

  onRoleChange(event: MatSelectChange): void {
    const selectedId = Number(event.value); // Get the selected role ID
    const selectedRole = this.roles.find((role) => role.id === selectedId); // Find the selected role

    // Emit the selected role's information
    if (selectedRole) {
      this.roleSelected.emit(selectedRole);
    }
  }
}
