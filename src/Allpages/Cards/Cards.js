import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold mt-[100px] mb-[30px]'>Top Month Sellers</h1>
                <div className='flex justify-center mx-auto w-[350px]'>
                    <p className='mx-[14px] hover:text-[#ff6f61]'>Women</p>
                    <p className='mx-[14px] hover:text-[#ff6f61]'>Man</p>
                    <p className='mx-[14px] hover:text-[#ff6f61]'>Kid</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;