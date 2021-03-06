import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import '../Product/Product.css';

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(first20);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const itemsPrice = cart.reduce((cur, it) => it.price + cur, 0);
    const totalShipping = cart.reduce((cur, it) => it.shipping + cur, 0);
    const totalBeforeTax = itemsPrice + totalShipping;
    const totalTax = cart.reduce((cur, it) => (it.price * 0.1) + cur, 0);
    const totalPrice = totalBeforeTax + totalTax;

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product showButton={true} product={product} func={addProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h5>Items Ordered: ${cart.length}</h5>
                <h6>Total: ${itemsPrice.toFixed(2)}</h6>
                <h6>Shipping: ${totalShipping.toFixed(2)}</h6>
                <h6>Total before tax: ${totalBeforeTax.toFixed(2)}</h6>
                <h6>Estimated Tax: ${totalTax.toFixed(2)}</h6>
                <h3 style={{ color: "red" }}>Order Total: ${totalPrice.toFixed(2)}</h3>
                <button className="btn">Review your order</button>
            </div>
        </div >
    );
};

export default Shop;