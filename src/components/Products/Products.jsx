import React, { use } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";

const Products = ({ dataPromise, cart, setCart }) => {
  const getData = use(dataPromise);

  

  return (
    <div>
        <div className="text-center w-[50vw] mx-auto mt-12 space-y-4">
            <h2 className="font-bold text-4xl">Premium Digital Tools</h2>
            <p className="text-wrap text-[#627382]">Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 mt-8">
        {getData.map((data) => {
          return (
            <AvailableProducts data={data} key={data.id} cart={cart} setCart={setCart}></AvailableProducts>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
