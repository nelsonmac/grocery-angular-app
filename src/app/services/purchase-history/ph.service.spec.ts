import { TestBed } from '@angular/core/testing';

import { PhService } from './ph.service';

describe('PhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhService = TestBed.get(PhService);
    expect(service).toBeTruthy();
  });
});
