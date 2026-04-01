import React, { useState } from 'react';
import Card from '../Card/Card';

const AvailableProducts = ({data, cart, setCart}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <Card data={data} cart={cart} setCart={setCart} isActive={isActive} setIsActive={setIsActive}></Card>
        </div>
    );
};

export default AvailableProducts;