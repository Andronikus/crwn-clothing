import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckout from '../../components/stripe-checkout/stripe-checkout.component';

import { selectCartTotalPrice, selectCartItems } from '../../redux/cart/cart.selectores';

import './checkout.styles.scss';


const Checkout = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        <div className='checkout-items-container'>
            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
            }
        </div>
        <div className='total'>TOTAL: {cartTotal}€</div>
        <div className='testing-data'>
            <p>For testing purpose only Visa: 4242424242424242 Any future date Any CCV</p>
        </div>
        <StripeCheckout price={cartTotal} />
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotalPrice
});

export default connect(mapStateToProps)(Checkout);