import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
    }

    let shippingPrice = 0;
    for (const product of cart){
        shippingPrice = shippingPrice + product.shipping;
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + shippingPrice + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingPrice}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;