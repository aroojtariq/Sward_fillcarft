import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutpageRoutingModule } from './checkoutpage-routing.module';
import { CheckoutpageComponent } from './checkoutpage.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CheckoutSubscribeComponent } from './checkout-subscribe/checkout-subscribe.component';


@NgModule({
  declarations: [CheckoutpageComponent, BillingAddressComponent, CheckoutSubscribeComponent],
  imports: [
    CommonModule,
    CheckoutpageRoutingModule
  ]
})
export class CheckoutpageModule { }
