import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartpageRoutingModule } from './cartpage-routing.module';
import { CartpageComponent } from './cartpage.component';
import { CartAccordianComponent } from './cart-accordian/cart-accordian.component';
import { CartHotsaleComponent } from './cart-hotsale/cart-hotsale.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


@NgModule({
  declarations: [CartpageComponent, CartAccordianComponent, CartHotsaleComponent, CartItemsComponent],
  imports: [
    CommonModule,
    CartpageRoutingModule
  ]
})
export class CartpageModule { }
