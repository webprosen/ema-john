import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, name, price, quantity, img, shipping} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" width="100"/>
            <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p className='review-price'>Price: <span className='orange-text'>${price}</span></p>
                <p className='review-qty-shipping'>Quantity: {quantity} / Shipping: <span className='review-shipping'>${shipping}</span></p>
            </div>
            <button className='btn-delete' onClick={() => handleRemoveFromCart(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default ReviewItem;