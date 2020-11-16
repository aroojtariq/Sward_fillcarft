import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppageRoutingModule } from './shoppage-routing.module';
import { ShoppageComponent } from './shoppage.component';
import { ShopAccordianComponent } from './shop-accordian/shop-accordian.component';
import { ShopHotsalesComponent } from './shop-hotsales/shop-hotsales.component';
import { ShopSubscribeComponent } from './shop-subscribe/shop-subscribe.component';
import { ShopSliderComponent } from './shop-slider/shop-slider.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [ShoppageComponent, ShopAccordianComponent, ShopHotsalesComponent, ShopSubscribeComponent, ShopSliderComponent],
  imports: [
    CommonModule,
    ShoppageRoutingModule,
    Ng5SliderModule
  ]
})
export class ShoppageModule { }
