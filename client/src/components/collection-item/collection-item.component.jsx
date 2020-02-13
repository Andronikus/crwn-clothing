import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';

import './component.item-style.scss';


const CollectionItem = ({ item, addItem }) => {
    
    const {name, imageUrl, price} = item;
    
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className='footer'>
                <span className="name"> {name}</span>
                <span className="price"> {price}</span>
            </div>
            <CustomButton className='custom-button' invertStyle onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => (
    {
        addItem: item => dispatch(addItemToCart(item))
    }
);

export default connect(null, mapDispatchToProps)(CollectionItem);