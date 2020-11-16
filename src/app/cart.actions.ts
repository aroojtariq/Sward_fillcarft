import { Action } from '@ngrx/store';
import {CartItems} from './cart';
export enum CartActionTypes {
  LoadCarts = '[Cart] Load Carts',
  AddCartItem = '[Cart] Add Item',
  RemoveCartItem = '[User] Remove Customer',
 
}

export class LoadCarts implements Action {
  readonly type = CartActionTypes.LoadCarts;
}

export class AddCartItem implements Action {
  readonly type = CartActionTypes.AddCartItem;
  constructor(public payload: { user1: CartItems }) { }
}

export class RemoveCartItem implements Action {
  readonly type = CartActionTypes.RemoveCartItem;
  constructor(public payload: string  ) {}
 }
 


export type CartActions = LoadCarts | AddCartItem | RemoveCartItem ;
