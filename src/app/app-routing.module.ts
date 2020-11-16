import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent } from './cart/cart.component';

const routes: Routes = [{ path: 'cart', component: CartComponent },{ path: 'checkoutpage', loadChildren: () => import('./checkoutpage/checkoutpage.module').then(m => m.CheckoutpageModule) }, { path: 'placeorderpage', loadChildren: () => import('./placeorderpage/placeorderpage.module').then(m => m.PlaceorderpageModule) }, { path: 'aboutpage', loadChildren: () => import('./aboutpage/aboutpage.module').then(m => m.AboutpageModule) }, { path: 'productdetailspage', loadChildren: () => import('./productdetailspage/productdetailspage.module').then(m => m.ProductdetailspageModule) }, { path: 'shoppage', loadChildren: () => import('./shoppage/shoppage.module').then(m => m.ShoppageModule) }, { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) }, { path: 'cartpage', loadChildren: () => import('./cartpage/cartpage.module').then(m => m.CartpageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
