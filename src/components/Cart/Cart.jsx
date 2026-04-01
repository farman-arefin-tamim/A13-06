import React from 'react';
import { MdDelete } from 'react-icons/md';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <div>
                <h3 className='font-bold text-xl px-8 mt-8'>Your Carts</h3>
                {
                    cart.map(item=>(
                        <div key={item.id} className='flex justify-between bg-base-300 rounded-2xl p-4 m-4'>
                            <div className='flex'>
                                <img className='h-10 w-20 object-contain' src={item.image} alt="" />
                            <div>
                                <p className='font-bold'>{item.name}</p>
                                <p className='font-semibold text-[#627382]'>${item.price}</p>
                            </div>
                            </div>
                            <MdDelete className='h-10 w-5 ' />
                        </div>
                    ))
                }
            </div> 
        </div>
    );
};

export default Cart;  