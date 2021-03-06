import React from 'react';
import './ReviewItem.css';
import '../Product/Product.css';

const ReviewItem = (props) => {
    const { name, quantity } = props.item;
    return (
        <div className="review-item">
            <h3>{name}</h3>
            <h4>Quantity: {quantity}</h4>
            <button className="btn">Remove</button>
        </div>
    );
};

export default ReviewItem;