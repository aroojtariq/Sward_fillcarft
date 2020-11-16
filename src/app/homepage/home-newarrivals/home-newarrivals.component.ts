import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { createAction, props } from '@ngrx/store';
import { event } from 'jquery';
import { ValueTransformer } from '@angular/compiler/src/util';
@Component({
  selector: 'app-home-newarrivals',
  templateUrl: './home-newarrivals.component.html',
  styleUrls: ['./home-newarrivals.component.css']
})
export class HomeNewarrivalsComponent implements OnInit {

  constructor(private store : Store) { }


  
  adduser(name :string , price : number): void {
    const user: CartItems = {"name" : name , "price" : price ,"quantity" : 1};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }

  ngOnInit(): void {

   /* $(".sword-details").click(function(e){
      e.preventDefault();
      console.log(e.target.getElementsByTagName("span").length);   
  })

  $(".middle").click(function(e){
    e.preventDefault();
    console.log(e.target.parentElement.parentElement.parentElement);
   var n=e.target.parentElement.parentElement.parentElement;
   
   console.log( n.getElementsByTagName("p"));
   var b= (n.getElementsByTagName("p"))
})*/

  }

}
