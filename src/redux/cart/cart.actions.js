import cartActionTypes from './cart.actions.types';

export const toogleHiddenValue = () => ({
    type: cartActionTypes.TOOGLE_HIDDEN_CART
});

export const addItem = item => (
    {
        type: cartActionTypes.ADD_ITEM,
        payload: item
    }
);