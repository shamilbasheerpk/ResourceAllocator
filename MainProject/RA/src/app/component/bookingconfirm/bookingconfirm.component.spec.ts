import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingconfirmComponent } from './bookingconfirm.component';

describe('BookingconfirmComponent', () => {
  let component: BookingconfirmComponent;
  let fixture: ComponentFixture<BookingconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
