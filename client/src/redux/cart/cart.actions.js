import cartActionTypes from './cart.action.types';

export const toogleHiddenValue = () => ({
    type: cartActionTypes.TOOGLE_HIDDEN_CART
});

export const addItemToCart = item => (
    {
        type: cartActionTypes.ADD_ITEM_TO_CART,
        payload: item
    }
);

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART,
});