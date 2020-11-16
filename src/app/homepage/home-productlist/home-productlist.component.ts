import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { createAction, props } from '@ngrx/store';
import { event } from 'jquery';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home-productlist',
  templateUrl: './home-productlist.component.html',
  styleUrls: ['./home-productlist.component.css']
})
export class HomeProductlistComponent implements OnInit {

  constructor(private store : Store) { }

  adduser(name :string , price : number): void {
    console.log(price);
    console.log(name);
    const user: CartItems = {"name" : name , "price" : price ,"quantity" : 1};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }
 


  ngOnInit(): void {
}
  slideData = [
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
    {
      image: "assets/images/arrow2.png",
      name: "Metal bluetooth cyan",
      price :99
    },
  ]
}
