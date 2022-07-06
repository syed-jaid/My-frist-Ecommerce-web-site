import React from 'react';
import '../Banner/Banner.css'
import { MdOutlineLocalShipping } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { TbFileLike } from 'react-icons/tb';

const DownBanner = () => {

    return (
        <section>
            <div className='mt-[37px] mb-[30px] all-cards' >
                <div className='flex justify-center '>
                    <MdOutlineLocalShipping className='text-[50px] mr-[20px] text-[#bababa]' />
                    <div>
                        <p className='text-[14px] font-semibold tracking-wide'>FREE SHIPPING </p>
                        <p className='text-[#878787]'>From all orders over $100 </p>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <RiMoneyDollarCircleLine className='text-[50px] mr-[20px] text-[#bababa]' />
                    <div>
                        <p className='text-[14px] font-semibold tracking-wide'> Free Returns</p>
                        <p className='text-[#878787]'>Return money within 30 days </p>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <AiOutlineSafetyCertificate className='text-[50px] mr-[20px] text-[#bababa]' />
                    <div>
                        <p className='text-[14px] font-semibold tracking-wide'>Secure Shopping  </p>
                        <p className='text-[#878787]'>You're in safe hands</p>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <TbFileLike className='text-[50px] mr-[20px] text-[#bababa]' />
                    <div>
                        <p className='text-[14px] font-semibold tracking-wide'>Over 10,000 Styles </p>
                        <p className='text-[#878787]'>We have everything you need  </p>
                    </div>
                </div>
            </div>
            <hr className='mb-[20px] w-[1220px] mx-auto' />
        </section>
    );
};

export default DownBanner;