import React, { use } from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';

const Products = ({dataPromise}) => {
    const getData = use(dataPromise);

    return (
        <div>
            {
                getData.map((data)=>{
                   return <AvailableProducts data={data} key={data.id}></AvailableProducts>
                })
            }
        </div>
    );
};

export default Products;