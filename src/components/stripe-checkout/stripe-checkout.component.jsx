import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const stripeAmount = { price } * 100;
    const stripeKey = 'pk_test_hjhZkLee3iym3aqk5h36p2tO004uzsZQYS';

    const onTokenHandle = (token) => {
        console.log(token);
        alert('Payment successfully!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothes Co.'
            image='https://sendeyo.com/up/d/f3eb2117da'
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