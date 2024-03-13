import { TestBed } from '@angular/core/testing';

import { RoleMatchService } from './role-match.service';

describe('RoleMatchServiceService', () => {
  let service: RoleMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
