import React from 'react';

const Cart = (props) => {
    const {cart} = props;

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
        </div>
    );
};

export default Cart;