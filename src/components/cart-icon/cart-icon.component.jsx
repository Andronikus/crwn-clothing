import React from 'react';

import { connect } from 'react-redux';
import {toogleHiddenValue} from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({toogleHiddenCart}) => (
    <div className='cart-item-container' onClick= {toogleHiddenCart} >
        <ShoppingIcon className='shopping-icon'/>
        <span className='shopping-counter'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toogleHiddenCart: () => dispatch(toogleHiddenValue())
})


export default connect(null, mapDispatchToProps)(CartIcon);