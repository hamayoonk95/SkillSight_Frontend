import { TestBed } from '@angular/core/testing';

import { RoleMatchServiceService } from './role-match.service';

describe('RoleMatchServiceService', () => {
  let service: RoleMatchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleMatchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
