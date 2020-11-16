import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHotsaleComponent } from './cart-hotsale.component';

describe('CartHotsaleComponent', () => {
  let component: CartHotsaleComponent;
  let fixture: ComponentFixture<CartHotsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartHotsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartHotsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
