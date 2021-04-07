import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorFindedComponent } from './author-finded.component';

describe('AuthorFindedComponent', () => {
  let component: AuthorFindedComponent;
  let fixture: ComponentFixture<AuthorFindedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorFindedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorFindedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
