import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGapVisualisationComponent } from './skill-gap-visualisation.component';

describe('SkillGapVisualisationComponent', () => {
  let component: SkillGapVisualisationComponent;
  let fixture: ComponentFixture<SkillGapVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillGapVisualisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillGapVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
