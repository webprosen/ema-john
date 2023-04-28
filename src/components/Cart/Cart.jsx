import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const {cart, clearCart} = props;

    let totalPrice = 0;
    let shippingPrice = 0;
    let quantity = 0;

    for (const product of cart){
        // if(product.quantity == 0){
        //     product.quantity = 1;
        // }
        totalPrice = totalPrice + product.price * product.quantity;
        shippingPrice = shippingPrice + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shippingPrice + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingPrice}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

            <button onClick={clearCart} style={{width: '100%', background: 'red', color: 'white'}}>
                Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} style={{marginLeft: '5px'}} />
            </button>
            <button style={{width: '100%', background: 'green', color: 'white'}}>
                <Link to="/checkout" className='text-white'>Checkout</Link>
            </button>
        </div>
    );
};

export default Cart;