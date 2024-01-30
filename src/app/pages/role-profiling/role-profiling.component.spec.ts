import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleProfilingComponent } from './role-profiling.component';

describe('RoleProfilingComponent', () => {
  let component: RoleProfilingComponent;
  let fixture: ComponentFixture<RoleProfilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleProfilingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleProfilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
