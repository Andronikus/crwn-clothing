import React from 'react';

import { connect } from 'react-redux';
import { toogleHiddenValue } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectores';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({ toogleHiddenCart, numberOfItems }) => {
    
    console.log('numberOfItems: ', numberOfItems);
    return (
        <div className='cart-item-container' onClick={toogleHiddenCart} >
            <ShoppingIcon className='shopping-icon' />
            <span className='shopping-counter'>{numberOfItems}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    numberOfItems: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toogleHiddenCart: () => dispatch(toogleHiddenValue())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);