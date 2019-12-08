import { TestBed } from '@angular/core/testing';

import { HttpinterseptorService } from './httpinterseptor.service';

describe('HttpinterseptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpinterseptorService = TestBed.get(HttpinterseptorService);
    expect(service).toBeTruthy();
  });
});
