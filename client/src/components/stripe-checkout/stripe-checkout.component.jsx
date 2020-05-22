import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripeAmount = price * 100;
    const stripeKey = 'pk_test_hjhZkLee3iym3aqk5h36p2tO004uzsZQYS';

    const onTokenHandle = token => {
        axios({
            method: 'post',
            url: '/payment',
            data: {
                amount: stripeAmount,
                token: token
            }
        }).then(response => {
            alert('Your payment was processed successfully');
        }).catch(error => {
            // console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment! Please make sure you use the provided card information');
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothes Co.'
            // image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}€`}
            amount={stripeAmount}
            currency='EUR'
            stripeKey={stripeKey}
            shippingAddress
            billingAddress
            allowRememberMe
            token={onTokenHandle}
        />
    );
}

export default StripeCheckoutButton;