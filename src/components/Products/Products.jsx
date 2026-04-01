import React, { use } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
import Cart from "../Cart/Cart";

const Products = ({ dataPromise, cart, setCart, active, setActive }) => {
  const getData = use(dataPromise);

  return (
    <div>
      <div className="text-center w-[50vw] mx-auto mt-12 space-y-4">
        <h2 className="font-bold text-4xl">Premium Digital Tools</h2>
        <p className="text-wrap text-[#627382]">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
        <div className="tabs tabs-box justify-center">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 bg-linear-to-r from-[#422ce7] to-[#4c3bd3] text-white"
            aria-label="Products"
           
            checked={active === "products"}
            onClick={() => setActive("products")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
            aria-label={`Carts (${cart.length})`}
            checked={active === "cart"}
            onClick={() => setActive("cart")}
          />
        </div>
      </div>
      {active === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 mt-8">
          {getData.map((data) => {
            return (
              <AvailableProducts
                data={data}
                key={data.id}
                cart={cart}
                setCart={setCart}
              ></AvailableProducts>
            );
          })}
        </div>
      ) : (
        <Cart cart={cart} setCart={setCart}></Cart>
      )}
    </div>
  );
};

export default Products;
