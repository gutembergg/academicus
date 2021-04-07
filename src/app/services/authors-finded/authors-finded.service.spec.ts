import { TestBed } from '@angular/core/testing';

import { AuthorsFindedService } from './authors-finded.service';

describe('AuthorsFindedService', () => {
  let service: AuthorsFindedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsFindedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
