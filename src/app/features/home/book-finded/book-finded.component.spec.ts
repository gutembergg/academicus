import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFindedComponent } from './book-finded.component';

describe('BookFindedComponent', () => {
  let component: BookFindedComponent;
  let fixture: ComponentFixture<BookFindedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFindedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFindedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
