import React from 'react';
import Card from '../Card/Card';

const AvailableProducts = ({data, cart, setCart}) => {
    
    return (
        <div>
            <Card data={data} cart={cart} setCart={setCart}></Card>
        </div>
    );
};

export default AvailableProducts;