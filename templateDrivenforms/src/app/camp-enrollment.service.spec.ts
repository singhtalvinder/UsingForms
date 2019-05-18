import { TestBed } from '@angular/core/testing';

import { CampEnrollmentService } from './camp-enrollment.service';

describe('CampEnrollmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampEnrollmentService = TestBed.get(CampEnrollmentService);
    expect(service).toBeTruthy();
  });
});
