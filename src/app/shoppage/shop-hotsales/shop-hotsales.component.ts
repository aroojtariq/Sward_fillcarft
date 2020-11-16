import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-hotsales',
  templateUrl: './shop-hotsales.component.html',
  styleUrls: ['./shop-hotsales.component.css']
})
export class ShopHotsalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hotsalesdata=[
   {
    swordimage : "assets/images/hotsales1.png",
    swordname : "TOP SWORD",
    swordprice : "$90.00",
   },
   {
    swordimage : "assets/images/hotsales2.png",
    swordname : "HARRY POTOR",
    swordprice : "$80.00",
   },
   {
    swordimage : "assets/images/hotsales3.png",
    swordname : "TOP OF THE LIST",
    swordprice : "$70.00",
   },
   {
    swordimage : "assets/images/hotsales4.png",
    swordname : "TOP SWORD",
    swordprice : "$80.00",
   },
   {
    swordimage : "assets/images/hotsales5.png",
    swordname : "HARRY POTOR",
    swordprice : "$70.00",
   }
  ]
}
