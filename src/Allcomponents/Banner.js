import React from 'react';
import banner from '../Img/Bannnerimg.png';

const Banner = () => {
    return (
        <div className='bg-no-repeat w-full h-[400px]' style={{
            backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center'
        }}>
            <div className='relative top-[300px] left-[200px] w-[400px] banner-title'>
                <h1 className='text-[36px] text-[white] font-semibold '>Computer Engineering</h1>
                <p className='text-[white]'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Banner;