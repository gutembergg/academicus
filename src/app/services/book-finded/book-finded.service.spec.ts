import { TestBed } from '@angular/core/testing';

import { BookFindedService } from './book-finded.service';

describe('BookFindedService', () => {
  let service: BookFindedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFindedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
