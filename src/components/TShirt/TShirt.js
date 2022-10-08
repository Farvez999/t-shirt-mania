import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt }) => {
    const { id, name, picture, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <button>Buy Now</button>
        </div>
    );
};

export default TShirt;