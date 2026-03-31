import React from 'react';
import Card from '../Card/Card';

const AvailableProducts = ({data}) => {
    return (
        <div>
            <Card data={data}></Card>
        </div>
    );
};

export default AvailableProducts;