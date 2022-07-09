import React from 'react';
import '../Banner/Banner.css'
import img1 from '../../img/fasion/1.png';
import img2 from '../../img/fasion/22.png';
import img3 from '../../img/fasion/44.png';
import img4 from '../../img/fasion/2.png';

const NewColletion = () => {
    return (
        <section>
            <div className='mt-[100px]'>
                <div className=' text-center mb-[55px]'>
                    <p className='text-[#a0a0a0]'>NEW COLLECTION</p>
                    <h1 className='text-[40px] font-semibold mt-[12px] mb-[27px]'>Best Picks 2021</h1>
                    <p className='text-[#a0a0a0]'>A conscious collection made entirely from food crop waste, recycled <br />cotton, other more sustainable materials. </p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <div className='flex ' >
                        <div className='overflow-hidden m-[14px]'>
                            <img className='transition ease-in-out duration-700 hover:scale-105' src={img4} alt="" />
                        </div>
                        <div className='overflow-hidden m-[14px]'>
                            <img className='transition ease-in-out duration-700 hover:scale-105' src={img2} alt="" />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='overflow-hidden m-[14px]'>
                            <img className='transition ease-in-out duration-700 hover:scale-105' src={img2} alt="" />
                        </div>
                        <div className='overflow-hidden m-[14px]'>
                            <img className='transition ease-in-out duration-700 hover:scale-105' src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewColletion;