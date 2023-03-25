import React, { useEffect, useState } from 'react';
import { add } from '../../utilites/utilites';
import Card from '../Card/Card';

import './Cosmatics.css';

const Cosmatics = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    return (
        <div className='show-data-container'>
            <h1>Wlcome our shop</h1>
            <p>Total items: {data.length}</p>
            <div className='card'>
                {
                    data.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cosmatics;