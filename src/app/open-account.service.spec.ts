import { TestBed } from '@angular/core/testing';

import { OpenAccountService } from './open-account.service';

describe('OpenAccountService', () => {
  let service: OpenAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
