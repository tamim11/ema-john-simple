import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <Product showButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;