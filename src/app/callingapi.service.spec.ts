import { TestBed } from '@angular/core/testing';

import { CallingapiService } from './callingapi.service';

describe('CallingapiService', () => {
  let service: CallingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
