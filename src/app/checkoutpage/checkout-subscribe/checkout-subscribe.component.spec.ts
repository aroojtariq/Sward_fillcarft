import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSubscribeComponent } from './checkout-subscribe.component';

describe('CheckoutSubscribeComponent', () => {
  let component: CheckoutSubscribeComponent;
  let fixture: ComponentFixture<CheckoutSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
