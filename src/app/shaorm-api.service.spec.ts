import { TestBed } from '@angular/core/testing';

import { ShaormAPIService } from './shaorm-api.service';

describe('ShaormAPIService', () => {
  let service: ShaormAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShaormAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
