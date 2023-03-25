import React from 'react';
import { add } from '../../utilites/utilites';

import './Cosmatics.css';

const Cosmatics = () => {
    const lipstic = 55;
    const bags = 500;
    const rings = 70
    const total = add(lipstic , bags, rings)
    return (
        <div>
            <h1>Wlcome our shop</h1>
            <p>Total cost : {total}</p>
        </div>
    );
};

export default Cosmatics;