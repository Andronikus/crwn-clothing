import React from 'react';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = () => (
    <div className='cart-item-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='shopping-counter'>0</span>
    </div>
);

export default CartIcon;