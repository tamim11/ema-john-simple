import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product;
    const addProduct = props.func;
    return (
        <div className="product-list">
            <div className="image-part">
                <img src={img} alt="pics" />
            </div>
            <div className="info-part">
                <h3>{name}</h3>
                <p>by: {seller}</p>
                <h2>${price}</h2>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => addProduct(props.product)} className="btn">add to cart</button>
            </div>
        </div>
    );
};

export default Product;