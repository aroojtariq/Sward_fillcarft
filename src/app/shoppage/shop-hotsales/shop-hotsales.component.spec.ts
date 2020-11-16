import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHotsalesComponent } from './shop-hotsales.component';

describe('ShopHotsalesComponent', () => {
  let component: ShopHotsalesComponent;
  let fixture: ComponentFixture<ShopHotsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHotsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHotsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
