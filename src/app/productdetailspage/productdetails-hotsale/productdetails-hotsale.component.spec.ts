import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsHotsaleComponent } from './productdetails-hotsale.component';

describe('ProductdetailsHotsaleComponent', () => {
  let component: ProductdetailsHotsaleComponent;
  let fixture: ComponentFixture<ProductdetailsHotsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsHotsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsHotsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
