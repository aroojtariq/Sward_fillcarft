import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdetailspageRoutingModule } from './productdetailspage-routing.module';
import { ProductdetailspageComponent } from './productdetailspage.component';
import { ProductdetailsTableComponent } from './productdetails-table/productdetails-table.component';
import { ProductdetailsAccordianComponent } from './productdetails-accordian/productdetails-accordian.component';
import { ProductdetailsHotsaleComponent } from './productdetails-hotsale/productdetails-hotsale.component';
import { ProductdetailsDescriptionboxComponent } from './productdetails-descriptionbox/productdetails-descriptionbox.component';

import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { ProductdetailsSubscribeComponent } from './productdetails-subscribe/productdetails-subscribe.component';

@NgModule({
  declarations: [ProductdetailspageComponent, ProductdetailsTableComponent, ProductdetailsAccordianComponent, ProductdetailsHotsaleComponent, ProductdetailsDescriptionboxComponent, ProductdetailsSubscribeComponent],
  imports: [
    CommonModule,
    ProductdetailspageRoutingModule,
    NgxNumberSpinnerModule
  ]
})
export class ProductdetailspageModule { }
