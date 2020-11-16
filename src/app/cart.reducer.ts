import { Action } from '@ngrx/store';
import { CartItems } from './cart';
import { CartActions , CartActionTypes } from './cart.actions';

export const cartFeatureKey = 'cartState';

export interface State {
  cartitems : CartItems[],
  itemscount : number,
  totalbill : number
}

export const initialState: State = {
  cartitems : [
    {"name" : "sword" , "price" : 99 ,"quantity" : 1},
    {"name" : "Flusas Knife" , "price" : 99 ,"quantity" : 2},
    {"name" : "Number 1 SWORD" , "price" : 99 ,"quantity" : 1}],
   itemscount : 3,
   totalbill : 0
};

 
export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {

    case CartActionTypes.LoadCarts:
     return{
       ...state
     }

     case CartActionTypes.AddCartItem: return {
      ...state ,
      cartitems : [...state.cartitems, action.payload.user1],
      totalbill : action.payload.user1.price + state.totalbill,
    }
 
    case CartActionTypes.RemoveCartItem: return {
      ...state,
      cartitems: [...state.cartitems.filter(item => item.name !== action.payload)],
      itemscount : state.itemscount-1
    }

    default:
      return state;
  }
}
