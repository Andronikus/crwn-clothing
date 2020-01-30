import React from 'react';

import { connect } from 'react-redux';
import { toogleHiddenValue } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({ toogleHiddenCart, numberOfItems }) => (
    <div className='cart-item-container' onClick={toogleHiddenCart} >
        <ShoppingIcon className='shopping-icon' />
        <span className='shopping-counter'>{numberOfItems}</span>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    numberOfItems: cartItems.reduce((acc, item) => acc + item.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toogleHiddenCart: () => dispatch(toogleHiddenValue())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);