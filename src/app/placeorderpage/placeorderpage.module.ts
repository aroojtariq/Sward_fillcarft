import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceorderpageRoutingModule } from './placeorderpage-routing.module';
import { PlaceorderpageComponent } from './placeorderpage.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { PlaceorderSubscribeComponent } from './placeorder-subscribe/placeorder-subscribe.component';


@NgModule({
  declarations: [PlaceorderpageComponent, OrderContainerComponent, PlaceorderSubscribeComponent],
  imports: [
    CommonModule,
    PlaceorderpageRoutingModule
  ]
})
export class PlaceorderpageModule { }
