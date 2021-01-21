import { TestBed } from '@angular/core/testing';

import { InternalDbService } from './internal-db.service';

describe('InternalDbService', () => {
  let service: InternalDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
