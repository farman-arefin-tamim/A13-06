import React from 'react';

const Stat = () => {
    return (
        <div className='flex justify-center items-center text-white bg-linear-to-r from-[#422ce7] to-[#4c3bd3] gap-20 p-10 mt-12'>
            <div>
                <h2 className='text-4xl font-semibold'>50K+</h2>
                <p className='font-light mt-2'>Active Users</p>
                
            </div>
             <div className="divider divider-horizontal"></div>
            <div>
                <h2 className='text-4xl font-semibold'>200+</h2>
                <p className='font-light mt-2'>Premium Tools</p>
                 
            </div>
            <div className="divider divider-primary divider-horizontal"></div>
            <div>
                <h2 className='text-4xl font-semibold'>4.9</h2>
                <p className='font-light mt-2'>Rating</p>
            </div>
        </div>
    );
};

export default Stat;