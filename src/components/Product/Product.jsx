import React from 'react';
import './Product.css';

const Product = (props) => {
    const {id, category, name,  seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>

            <div className="product-info">
                <div className="product-title">{name}</div>
                <div className="product-price">${price}</div>
                <div className="vendor">Manufacturer : {seller}</div>
                <div className="rating">Rating: {ratings} Stars</div>
            </div>

            <button className="add-to-cart" onClick={() => handleAddToCart(props.product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default Product;