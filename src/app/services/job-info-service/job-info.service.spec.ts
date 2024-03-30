import { TestBed } from '@angular/core/testing';

import { JobInfoService } from './job-info.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobInfoService', () => {
  let service: JobInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobInfoService],
    });
    
    service = TestBed.inject(JobInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
