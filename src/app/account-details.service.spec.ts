import { TestBed } from '@angular/core/testing';

import { AccountDetailsService } from './account-details.service';

describe('AccountDetailsService', () => {
  let service: AccountDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
