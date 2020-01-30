export const addItemToCart = (cartItems, itemToAdd) => {
    const existItem = cartItems.find( item => item.id === itemToAdd.id);

    if(!existItem){
        return [...cartItems, {...itemToAdd, quantity: 1}];
    }

    return cartItems.map( item => (item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item));
}