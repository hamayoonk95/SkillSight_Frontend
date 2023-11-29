import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSkillsVisualisationComponent } from './trending-skills-visualisation.component';

describe('TrendingSkillsVisualisationComponent', () => {
  let component: TrendingSkillsVisualisationComponent;
  let fixture: ComponentFixture<TrendingSkillsVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingSkillsVisualisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingSkillsVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
