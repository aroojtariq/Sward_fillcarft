import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsSubscribeComponent } from './productdetails-subscribe.component';

describe('ProductdetailsSubscribeComponent', () => {
  let component: ProductdetailsSubscribeComponent;
  let fixture: ComponentFixture<ProductdetailsSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
