import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookResearchedComponent } from './user-book-researched.component';

describe('UserBookResearchedComponent', () => {
  let component: UserBookResearchedComponent;
  let fixture: ComponentFixture<UserBookResearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookResearchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookResearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
