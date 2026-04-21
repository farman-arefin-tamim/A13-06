import React from 'react';
import banner from '../../assets/banner.png';
import play from '../../assets/Play.png'
import { FaArrowRight } from 'react-icons/fa';
import { FaRegCircleDot } from 'react-icons/fa6';
const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 mt-12'>
            <section className='space-y-5'>
                <div className="badge badge-soft badge-primary"><FaRegCircleDot /> New AI Powered Tools available</div>
                <h1 className='font-bold text-6xl'>Supercharge Your<br></br>Analog Workflow</h1>
                <p className='text-[#627382] text-wrap'>Access premium Sport Gadgets, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p>

               <div className='flex flex-col md:flex-row gap-2'>
                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white'>Explore Products<FaArrowRight /></button>
                <button className="btn btn-outline btn-primary rounded-full"><img src={play} alt="" /> Watch Demo</button>
               </div>
            </section>
            <section className='w-[50vw]'>
                <img src={banner} alt="" />
            </section>
        </div>
    );
};

export default Banner;