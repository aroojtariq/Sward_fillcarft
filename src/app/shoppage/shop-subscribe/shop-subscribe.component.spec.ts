import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSubscribeComponent } from './shop-subscribe.component';

describe('ShopSubscribeComponent', () => {
  let component: ShopSubscribeComponent;
  let fixture: ComponentFixture<ShopSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
