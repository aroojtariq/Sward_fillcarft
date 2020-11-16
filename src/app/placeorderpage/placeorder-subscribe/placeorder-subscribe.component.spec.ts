import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceorderSubscribeComponent } from './placeorder-subscribe.component';

describe('PlaceorderSubscribeComponent', () => {
  let component: PlaceorderSubscribeComponent;
  let fixture: ComponentFixture<PlaceorderSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceorderSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceorderSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
