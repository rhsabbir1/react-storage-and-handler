import React from 'react';
import { addToDb } from '../../utilites/fakedb';
import './Card.css'

const Card = (props) => {
    const {name , company,id} = props.card;
    const addToCard = (id)=>{
        addToDb(id)
    }
    
    return (
        <div className='person'>
            <h1>Name : {name}</h1>
            <h3>Conpany : {company}</h3>
            <button onClick={() => addToCard(id)} className='btn'>Show Details</button>
        </div>
    );
};

export default Card;