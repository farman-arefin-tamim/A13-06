import React from "react";

const Card = ({ data , cart, setCart}) => {
    
  return (
    <div className="container mx-auto">
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between mb-6">
            <img src={data.image} alt="" className="w-7.5" />
            <span className={`badge badge-soft ${data.tagType}`}>{data.tag}</span>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{data.name}</h2>
          </div>
           <p className="text-[#627382]">{data.description}</p>
           <span className="text-xl font-bold">${data.price}/mo</span>
          <ul className="mt-2 flex flex-col gap-2 text-xs text-[#627382]">
            {data.features.map((feature, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#3f28ec] to-[#6756e9]" onClick={()=>setCart([...cart, data])}>
               Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
