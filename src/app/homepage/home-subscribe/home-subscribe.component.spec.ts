import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubscribeComponent } from './home-subscribe.component';

describe('HomeSubscribeComponent', () => {
  let component: HomeSubscribeComponent;
  let fixture: ComponentFixture<HomeSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
