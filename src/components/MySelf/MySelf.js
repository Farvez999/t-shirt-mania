import React, { useContext } from 'react';
import { MyContext } from '../GrandPa/GrandPa';

const MySelf = ({ house }) => {
    const ring = useContext(MyContext)

    return (
        <div>
            <h4>My Self</h4>
            <p><small>House: {house}</small></p>
            <p><small>Gift: {ring}</small></p>
        </div>
    );
};

export default MySelf;