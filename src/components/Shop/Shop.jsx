import React from 'react';
import { multiplied } from '../../utilites/utilites';

const Shop = () => {
    const shosPrice = 570;
    const quantity = 2;
    const total = multiplied(shosPrice, quantity)
    return (
        <div>
            <h2>This is show price</h2>
            <p>Price : {total}</p>
        </div>
    );
};

export default Shop;