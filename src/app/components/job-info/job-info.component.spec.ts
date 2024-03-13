import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobInfoComponent } from './job-info.component';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { JobInfoService } from '../../services/job-info-service/job-info.service';
import { of, throwError } from 'rxjs';

describe('JobInfoComponent', () => {
  let component: JobInfoComponent;
  let fixture: ComponentFixture<JobInfoComponent>;
  let mockJobInfoService: any;

  beforeEach(async () => {
    mockJobInfoService = {
      getJobInfo: jasmine.createSpy('getJobInfo').and.returnValue(
        of({
          jobCount: 10,
          cutOffDate: new Date(),
        })
      ),
    };

    await TestBed.configureTestingModule({
      imports: [JobInfoComponent],
      providers: [{ provide: JobInfoService, useValue: mockJobInfoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(JobInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initializes correctly without inputs', () => {
    expect(component.jobInfo).toBeUndefined();
    expect(component.selectedRoleId).toBeNull();
    expect(component.selectedRoleTitle).toBeNull();
  });

  it('handles null response from service', () => {
    mockJobInfoService.getJobInfo.and.returnValue(of(null));
    component.selectedRoleId = 1;
    component.startDate = new Date();
    component.endDate = new Date();
    component.fetchJobInfo();
    expect(component.jobInfo).toBeUndefined();
  });

  it('handles error in fetchJobInfo', () => {
    const consoleSpy = spyOn(console, 'error');
    mockJobInfoService.getJobInfo.and.returnValue(throwError(() => new Error('Error fetching job info')));
    component.selectedRoleId = 1;
    component.startDate = new Date();
    component.endDate = new Date();
    component.fetchJobInfo();
    expect(consoleSpy).toHaveBeenCalledWith('Error fetching job info:', jasmine.any(Error));
  });

  it('does not call fetchJobInfo when required inputs are missing', () => {
    component.ngOnChanges({});
    expect(mockJobInfoService.getJobInfo).not.toHaveBeenCalled();
  });

  it('should call fetchJobInfo when ngOnChanges runs', () => {
    component.selectedRoleId = 123;
    component.startDate = new Date();
    component.endDate = new Date();

    const changes: SimpleChanges = {
      selectedRoleId: new SimpleChange(null, component.selectedRoleId, true),
      startDate: new SimpleChange(null, component.startDate, true),
      endDate: new SimpleChange(null, component.endDate, true),
    };

    component.ngOnChanges(changes);
    fixture.detectChanges();
    expect(mockJobInfoService.getJobInfo).toHaveBeenCalled();
  });
});
