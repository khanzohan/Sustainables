import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';



const CartDropdown = ({ cartItems, itemCount }) => (
    <div className='cart-dropdown'>
        <div className={itemCount !== 0 ? 'cart-items' : 'empty-cart'}>
            {
                itemCount !== 0 ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <div>Your cart is currently empty</div>
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropdown);