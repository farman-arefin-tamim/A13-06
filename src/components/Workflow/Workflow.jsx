import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#422ce7] to-[#4c3bd3] h-[50vh]'>
            <div className='text-center text-white'>
                <h3 className='font-bold text-4xl'>Ready to Transform Your Workflow?</h3>
                <p className='text-wrap '>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className='flex items-center justify-center'>
                <button className="btn btn-soft btn-primary rounded-full text-[#422ce7] bg-white">Explore Products</button>
                <button className="btn btn-outline btn-primary rounded-full text-white">View Pricing</button>
            </div>
           <div className='text-center text-white'>
                 <p>14-day free trial • No credit card required • Cancel anytime</p>
           </div>
        </div>
    );
};

export default Workflow;