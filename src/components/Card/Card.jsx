import React from "react";

const Card = ({data}) => {
    
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">{data.tag}</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{data.name}</h2>
            <p>{data.description}</p>
            <span className="text-xl">${data.price}/mo</span>
          </div>
          {
            data.features.map((feature, index)=>{
          <ul className="mt-6 flex flex-col gap-2 text-xs">
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
          </ul>
            })
          }
          <div className="mt-6">
            <button className="btn btn-primary btn-block rounded-full">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
