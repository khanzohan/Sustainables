import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartTotal, cartItems }) => (
    <div className="checkout-page">
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantitiy</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            Total: ${cartTotal}
        </div>

        <div>
            <StripeCheckoutButton />
            <i className='fas fa-exclamation-circle'>
                <div className='payment-details'>
                    For credit card info, please use:
                    <div className='tooltip-grid'>
                        <div>
                            card number: <br />
                            Exp: <br />
                            CVV:
                        </div>
                        <div>
                            4242 4242 4242 4242 <br />
                            01/20 <br />
                            123
                        </div>
                    </div>
                </div>
            </i>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartTotal: selectCartTotal,
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Checkout);