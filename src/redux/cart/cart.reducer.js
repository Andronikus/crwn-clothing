import cartActionTypes from './cart.actions.types';

import { addItemToCart } from './cartItems.util';

const INITIAL_CART_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_CART_STATE, action) => {

    switch(action.type){
        case cartActionTypes.TOOGLE_HIDDEN_CART:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;