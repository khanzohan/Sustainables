import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = 100 * price;
    const publicKey = 'pk_test_U5l8gDyi7aHK4nA28EU7Vaa200IonaTFvn';

    const onToken = token => {
        console.log(token);
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Sustainables LLC'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            panelLabel='Pay now'
            token={onToken}
            amount={priceForStripe}
            stripeKey={publicKey}
        />
    )
}

export default StripeCheckoutButton;