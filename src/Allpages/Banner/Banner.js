import React from 'react';
import './Banner.css';
import { FiArrowRight } from 'react-icons/fi';
import woman from '../../img/1.png'
import man from '../../img/4.png'
import child from '../../img/2.png'

const Banner = () => {
    return (
        <div className='flex'>
            <div className='relative'>
                <img className='h-[522px]' src={woman} alt="" />

                <button className='img-1 flex font-semibold justify-center items-center text-center bg-white py-[15px] w-[200px]'>Shop <span className='text-white'>__</span> Womens<FiArrowRight className='mt-[6px] ml-[14px]' /></button>
            </div>
            <div className='relative'>
                <img className='w-[515px] h-[522px]' src={man} alt="" />
                <button className='flex img-1 font-semibold justify-center items-center text-center bg-white py-[15px] w-[200px]'>Shop<span className='text-white'>__</span>Mens<FiArrowRight className='mt-[6px] ml-[14px]' /></button>
            </div>
            <div className='relative'>
                <div >
                    <img className='w-[515px] h-[522px]' src={child} alt="" />
                </div>
                <button className='flex img-1 font-semibold justify-center items-center text-center bg-white py-[15px] w-[200px]'>Shop<span className='text-white'>__</span>Kid<FiArrowRight className='mt-[6px] ml-[14px] ' /></button>
            </div>
        </div>
    );
};

export default Banner;