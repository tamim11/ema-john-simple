import React from 'react';
import './Cart.css';
import '../Product/Product.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const itemsPrice = cart.reduce((cur, it) => it.price + cur, 0);
    const totalShipping = cart.reduce((cur, it) => it.shipping + cur, 0);
    const totalBeforeTax = itemsPrice + totalShipping;
    const totalTax = cart.reduce((cur, it) => (it.price * 0.1) + cur, 0);
    const totalPrice = totalBeforeTax + totalTax;
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Ordered: ${cart.length}</h5>
            <h6>Total: ${itemsPrice.toFixed(2)}</h6>
            <h6>Shipping: ${totalShipping.toFixed(2)}</h6>
            <h6>Total before tax: ${totalBeforeTax.toFixed(2)}</h6>
            <h6>Estimated Tax: ${totalTax.toFixed(2)}</h6>
            <h3 style={{ color: "red" }}>Order Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="review">
                <button className="btn">Review your order</button>
            </Link>
        </div>
    );
};

export default Cart;