import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleRoadmapComponent } from './role-roadmap.component';

describe('RoleRoadmapComponent', () => {
  let component: RoleRoadmapComponent;
  let fixture: ComponentFixture<RoleRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleRoadmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
