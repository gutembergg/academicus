import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchedBookComponent } from './researched-book.component';

describe('ResearchedBookComponent', () => {
  let component: ResearchedBookComponent;
  let fixture: ComponentFixture<ResearchedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
