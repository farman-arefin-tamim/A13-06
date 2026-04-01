import React from "react";
import account from "../../assets/user.png";
import products from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
const Steps = () => {
  return (
    <div className="bg-gray-100 pb-15">
      <div className="text-center mt-12 pt-12">
        <h2 className="font-bold text-3xl">Get Started In 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="flex justify-around items-center mt-12">
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body items-center">
            <img src={account} alt="" />
            <h2 className="card-title">Create Account</h2>
            <p className="text-[#627382] text-center">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body items-center">
            <img src={products} alt="" />
            <h2 className="card-title">Choose Products</h2>
            <p className="text-[#627382] text-center">
                Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
          <div className="card-body items-center">
            <img src={rocket} alt="" className=""/>
            <h2 className="card-title">Start Creating</h2>
            <p className="text-[#627382] text-center">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
