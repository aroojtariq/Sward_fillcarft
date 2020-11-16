import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeNewarrivalsComponent } from './home-newarrivals/home-newarrivals.component';
import { HomeBannersComponent } from './home-banners/home-banners.component';
import { HomeProductlistComponent } from './home-productlist/home-productlist.component';
import { HomeTestimonalComponent } from './home-testimonal/home-testimonal.component';
import { HomePartnersComponent } from './home-partners/home-partners.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeSubscribeComponent } from './home-subscribe/home-subscribe.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [HomepageComponent, HomeServicesComponent, HomeNewarrivalsComponent, HomeBannersComponent, HomeProductlistComponent, HomeTestimonalComponent, HomePartnersComponent, HomeBlogComponent, HomeSubscribeComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NgxUsefulSwiperModule
  ]
})
export class HomepageModule { }
