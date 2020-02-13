export const addItemToCart = (cartItems, itemToAdd) => {
    const existItem = cartItems.find( item => item.id === itemToAdd.id);

    if(!existItem){
        return [...cartItems, {...itemToAdd, quantity: 1}];
    }

    return cartItems.map( item => (item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item));
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existItem.quantity === 1){
        return clearItemFromCart(cartItems, cartItemToRemove);
    }

    return cartItems.map(cartItem => (
        cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity -1} : cartItem
        )
    );
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const existItem = cartItems.find(cartItem => cartItem.id === cartItemToClear.id);

    if(existItem){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
    }
    return cartItems;
}