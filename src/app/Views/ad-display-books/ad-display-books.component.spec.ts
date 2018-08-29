import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDisplayBooksComponent } from './ad-display-books.component';

describe('AdDisplayBooksComponent', () => {
  let component: AdDisplayBooksComponent;
  let fixture: ComponentFixture<AdDisplayBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdDisplayBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDisplayBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
