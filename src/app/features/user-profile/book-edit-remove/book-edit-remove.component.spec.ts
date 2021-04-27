import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditRemoveComponent } from './book-edit-remove.component';

describe('BookEditRemoveComponent', () => {
  let component: BookEditRemoveComponent;
  let fixture: ComponentFixture<BookEditRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookEditRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
