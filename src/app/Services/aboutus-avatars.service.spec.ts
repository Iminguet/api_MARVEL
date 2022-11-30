import { TestBed } from '@angular/core/testing';

import { AboutusAvatarsService } from './aboutus-avatars.service';

describe('AboutusAvatarsService', () => {
  let service: AboutusAvatarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutusAvatarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
