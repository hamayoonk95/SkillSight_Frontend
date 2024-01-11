import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesService } from '../../services/job-roles-service/job-roles.service';

@Component({
  selector: 'app-role-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-selection.component.html',
  styleUrl: './role-selection.component.css',
})
export class RoleSelectionComponent implements OnInit {
  @Output() roleSelected = new EventEmitter<{ id: number; title: string }>();
  roles: { id: number; roleTitle: string }[] = [];

  constructor(private rolesService: RolesService) {}

  ngOnInit() {
    this.rolesService.getRoles().subscribe({
      next: (data: { id: number; roleTitle: string }[]) => {
        this.roles = data;
      },
      error: (err) => {
        console.error('There was an error retrieving roles!', err);
      },
    });
  }

  onRoleChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = Number(selectElement.value);

    const selectedRole = this.roles.find((role) => role.id === selectedId);

    if (selectedRole) {
      this.roleSelected.emit({
        id: selectedRole.id,
        title: selectedRole.roleTitle,
      });
    }
  }
}
