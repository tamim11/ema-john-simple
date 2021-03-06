import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products] = useState(first20);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        addToDatabaseCart(product.key, sameProduct.length);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} showButton={true} product={product} func={addProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;