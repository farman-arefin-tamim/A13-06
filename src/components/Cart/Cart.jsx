import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <div>
        <h3 className="font-bold text-xl px-8 mt-8">Your Carts</h3>
        {
            cart.length===0?<div className="font-bold text-4xl flex justify-center items-center text-[#627382]"><h1>Your cart is empty</h1></div>
            :<>
                {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-base-300 rounded-2xl p-4 m-4"
          >
            <div className="flex">
              <img
                className="h-10 w-20 object-contain"
                src={item.image}
                alt=""
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="font-semibold text-[#627382]">${item.price}</p>
              </div>
            </div>
            <MdDelete className="h-10 w-5 " />
          </div>
        ))}
        <div className="text-xl font-bold px-8 mt-4 flex justify-between text-[#627382]">
            <span>Total:</span>
            <span>${total}</span>
        </div>
       <div className="flex items-center justify-center mt-12">
             <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full" onClick={()=>setCart([])}>Proceed To Checkout</button>
       </div>
            </>
        }
      </div>
    </div>
  );
};

export default Cart;
