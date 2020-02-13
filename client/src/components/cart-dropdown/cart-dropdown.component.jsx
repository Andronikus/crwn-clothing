import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectores';
import { toogleHiddenValue } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, history, toogleHidden}) => (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(item => (<CartItem key= {item.id} item={item}/>)) :
                <span className='empty-message'>Empty Cart</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            toogleHidden();
            }
        }>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
        cartItems: selectCartItems
    }
)

const mapDispatchToProps = dispatch => ({
    toogleHidden: () => dispatch(toogleHiddenValue())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));