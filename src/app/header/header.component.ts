import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../cart.actions';
import * as fromCart from '../cart.selectors';
import {CartItems} from '../cart';
import { createAction, props } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartitems : CartItems[] = [];
  totalbill :number;
  itemscount:number;

  constructor(private store : Store) { }

  showcart() : void{
    console.log(this.itemscount);
    
      if($(".cart").css("display")=="none")
      {
        $(".cart").css("display", "block");
      }
      else{
        $(".cart").css("display", "none");
      }
    
  }
   removeitem(name:string):void{
    const user: string =  name ;
    this.store.dispatch(new CartActions.RemoveCartItem(user));
   }

  openSearch() : void{
    if($("#myOverlay").css("display")=="none")
      {
        $("#myOverlay").css("display", "block");
      }
      else{
        $("#myOverlay").css("display", "none");
      }
  }
  

  ngOnInit(): void {

    this.store.pipe(select(fromCart.getCartItems)).subscribe(
      cartitems => {
       this.cartitems = cartitems;
       console.log(cartitems);
     })

     this.store.pipe(select(fromCart.getTotalBill)).subscribe(
      totalbill => {
       this.totalbill = totalbill;
     })

     this.store.pipe(select(fromCart.getItemsCount)).subscribe(
      itemscount => {
       this.itemscount = itemscount;
       if(this.itemscount==0)
       {
         $(".cartempty").css("display", "block");
         $(".cartdiv").css("display", "none");
        }
       else
       {
        $(".cartdiv").css("display", "block");
        $(".cartempty").css("display", "none");
       }    
      })


  }

  slideData = [
    {
      name: "assets/images/placeholder.png",
    },
    {
      name: "assets/images/placeholder.png",
    },
    {
      name: "assets/images/placeholder.png",
    } 
  ]

   


  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    slidesPerView: 1,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    
    on: { slideChange () { 
    $('header-box').show();
    console.log('slideChange') } },

    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    },
    loop: true
  };
}
