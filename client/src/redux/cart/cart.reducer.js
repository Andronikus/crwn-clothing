import cartActionTypes from './cart.action.types';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from './cartItems.util';

const INITIAL_CART_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_CART_STATE, action) => {

    switch (action.type) {
        case cartActionTypes.TOOGLE_HIDDEN_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;