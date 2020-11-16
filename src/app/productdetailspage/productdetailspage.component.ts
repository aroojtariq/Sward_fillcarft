import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../cart.actions';
import * as fromCart from '../cart.selectors';
import {CartItems} from '../cart';
import { createAction, props } from '@ngrx/store';
import { event } from 'jquery';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-productdetailspage',
  templateUrl: './productdetailspage.component.html',
  styleUrls: ['./productdetailspage.component.css']
})
export class ProductdetailspageComponent implements OnInit {

  constructor(private store : Store) { }

  adduser(name :string , price : number): void {
    console.log(price);
    console.log(name);
    const user: CartItems = {"name" : name , "price" : price ,"quantity" : 1};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }

  ngOnInit(): void {
  }
  hotsalesdata=[
   {
    swordname : "TOP SWORD",
    swordprice : 90.00,
   },
   {
    swordname : "HARRY POTOR",
    swordprice : 80.00,
   },
   {
    swordname : "TOP OF THE LIST",
    swordprice : 70.00,
   },
   {
    swordname : "TOP SWORD",
    swordprice : 80.00,
   }
  ]
}
