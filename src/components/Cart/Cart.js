import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please Buy at least one item!!!</p>
    }
    else {
        message = <p>Thanks for buying</p>
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Order Quantity: {cart.length}</h5>

            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;