import React from 'react';
import join from '../Img/Vector.png';
import card1 from '../Img/card/Rectangle 5.png';
import card2 from '../Img/card/Rectangle 4.png';
import card3 from '../Img/card/Rectangle 3.png';
import card1sub from '../Img/card/Article.png';
import card2sub from '../Img/card/Education.png';
import card3sub from '../Img/card/Meetup.png';
import doots from '../Img/card/boot.png';
import person1 from '../Img/card/person1.png';
import person2 from '../Img/card/person2.png';
import person3 from '../Img/card/person3.png';
import person4 from '../Img/card/person4.png';
import shear from '../Img/card/shear.png';
import worrning from '../Img/card/worrning.png';
import { AiFillCaretDown, AiOutlineEye } from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { BsBriefcase } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';

const BigCard = () => {
    return (
        <div className='lg:w-[1040px] mx-auto mt-[40px] mb-[100px] big-main-cards'>
            <div className='flex justify-between'>
                <div className="tabs ml-[0] post-main-count1 font-bold">
                    <a className="tab tab-active">All Posts(32)</a>
                    <a className="tab">Article</a>
                    <a className="tab">Event</a>
                    <a className="tab">Education</a>
                    <a className="tab">Job</a>
                </div>
                <div className="tabs ml-[0] post-main-count2 hidden font-bold">
                    <a className="tab tab-active"> Posts(320)</a>
                </div>
                <div className='button-div'>
                    <button className='bg-[#EDEEF0] px-[12px] py-[8px] rounded-[4px]'>Write a Post <AiFillCaretDown className='inline ml-[15px]' /></button>
                    <button className='bg-[#2F6CE5] px-[12px] py-[8px] rounded-[4px] ml-[16px] text-[white] '> <img src={join} alt="" className='inline mr-[6px]' /> Join Group </button>
                </div>
                <div className='hidden filter-button'>
                    <button className='bg-[#EDEEF0] px-[12px] py-[8px] rounded-[4px]'>Filter: All <AiFillCaretDown className='inline ml-[15px]' /></button>
                </div>
            </div>
            <hr className='mt-[12px] hidden sm:block' />
            {/* all cards  */}
            <div className='flex justify-between'>
                <div className='allcard'>
                    {/* card 1 */}
                    <div className="single-card w-[692px] border-[1px] border-[#E0E0E0] rounded mt-[30px] mb-[16px]">
                        <img src={card1} alt="" />
                        <div className='pt-[20px] px-[20px] card-main-info '>
                            <img src={card1sub} alt="" />
                            <div className='flex justify-between mt-[10px]'>
                                <h1 className=' text-[22px] font-semibold card-main-title'>What if famous brands had regular fonts? Meet <br className='hidden sm:block' /> RegulaBrands!</h1>
                                <img className='h-[6px] mt-[9px]' src={doots} alt="" />
                            </div>
                            <h1 className='text-[#5C5C5C] text-[19px] mt-[12px] ux-card-title'>
                                I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                            </h1>
                            <h1 className='text-[#5C5C5C] text-[19px] mt-[12px] ux-card-title2 hidden'>
                                I’ve worked in UX for the better part of a decade. F...
                            </h1>
                            <div className='mt-[32px] flex justify-between content-center'>
                                <div className='view-main'>
                                    <img className='inline person-img ' src={person1} alt="" />
                                    <div className='font-semibold text-[18px] inline  person-name ml-[10px] mb-[0] h-[10px]'>
                                        Sarthak Kamra
                                        <br /> <span className='view-count hidden'>1.4k views</span>
                                    </div>

                                </div>
                                <div className='mt-[7px] mb-0'>
                                    <p className='text-[#525252] text-[14px] inline view-count-1'> <AiOutlineEye className='text-[19px] inline mr-[9px] font-medium' />1.4k views</p>
                                    <img className='bg-[#EDEEF0] p-[14px] inline ml-[40px] share-img1' src={shear} alt="" />

                                    <div className='bg-[#EDEEF0] rounded py-[9px] px-[13px] share-div mb-0'>
                                        <img className=' inline share-img' src={shear} alt="" />
                                        <span className='ml-[5px] text-[12px]'>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="single-card w-[692px] border-[1px] border-[#E0E0E0] rounded mt-[30px] mb-[16px]">
                        <img src={card2} alt="" />
                        <div className='pt-[20px] px-[20px] card-main-info '>
                            <img src={card2sub} alt="" />
                            <div className='flex justify-between mt-[10px]'>
                                <h1 className=' text-[22px] font-semibold card-main-title'>Tax Benefits for Investment under National Pension <br className='hidden sm:block' /> Scheme launched by Government</h1>
                                <img className='h-[6px] mt-[9px]' src={doots} alt="" />
                            </div>
                            <h1 className='text-[#5C5C5C] text-[19px] mt-[12px] ux-card-title'>
                                I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                            </h1>
                            <h1 className='text-[#5C5C5C] text-[19px] mt-[12px] ux-card-title2 hidden'>
                                I’ve worked in UX for the better part of a decade. F...
                            </h1>

                            <div className='mt-[32px] flex justify-between content-center'>
                                <div className='view-main'>
                                    <img className='inline person-img ' src={person2} alt="" />
                                    <div className='font-semibold text-[18px] inline  person-name ml-[10px] mb-[0] h-[10px]'>
                                        Sarah West
                                        <br /> <span className='view-count hidden'>1.4k views</span>
                                    </div>

                                </div>
                                <div className='mt-[7px] mb-0'>
                                    <p className='text-[#525252] text-[14px] inline view-count-1'> <AiOutlineEye className='text-[19px] inline mr-[9px] font-medium' />1.4k views</p>
                                    <img className='bg-[#EDEEF0] p-[14px] inline ml-[40px] share-img1' src={shear} alt="" />

                                    <div className='bg-[#EDEEF0] rounded py-[9px] px-[13px] share-div mb-0'>
                                        <img className=' inline share-img' src={shear} alt="" />
                                        <span className='ml-[5px] text-[12px]'>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="single-card w-[692px] border-[1px] border-[#E0E0E0] rounded mt-[30px] mb-[16px]">
                        <img src={card3} alt="" />
                        <div className='pt-[20px] px-[20px] card-main-info '>
                            <img src={card3sub} alt="" />
                            <div className='flex justify-between mt-[10px]'>
                                <h1 className=' text-[22px] font-semibold card-main-title'>Finance & Investment Elite Social Mixer @Lujiazui</h1>
                                <img className='h-[6px] mt-[9px]' src={doots} alt="" />

                            </div>
                            <div className='mt-12px inline mr-[44px] '>
                                <p className='font-semibold inline card-info'><MdOutlineDateRange className='inline mb-[4px] mr-[6x] ' /> Fri, 12 Oct, 2018</p>
                            </div>
                            <div className='mt-12px inline '>
                                <p className='font-semibold inline card-info'><IoLocationOutline className='inline mb-[4px] mr-[6x] ' /> Ahmedabad, India</p>
                            </div>
                            <div className='mt-[16px] text-center rounded-lg border-[1px] border-[#A9AEB8]' >
                                <p className='text-[#E56135] text-[14px] font-semibold my-[10px]'>Visit Website</p>
                            </div>
                            <div className='mt-[32px] flex justify-between content-center'>
                                <div className='view-main'>
                                    <img className='inline person-img ' src={person3} alt="" />
                                    <div className='font-semibold text-[18px] inline  person-name ml-[10px] mb-[0] h-[10px]'>
                                        Ronal Jones
                                        <br /> <span className='view-count hidden'>1.4k views</span>
                                    </div>

                                </div>
                                <div className='mt-[7px] mb-0'>
                                    <p className='text-[#525252] text-[14px] inline view-count-1'> <AiOutlineEye className='text-[19px] inline mr-[9px] font-medium' />1.4k views</p>
                                    <img className='bg-[#EDEEF0] p-[14px] inline ml-[40px] share-img1' src={shear} alt="" />

                                    <div className='bg-[#EDEEF0] rounded py-[9px] px-[13px] share-div mb-0'>
                                        <img className=' inline share-img' src={shear} alt="" />
                                        <span className='ml-[5px] text-[12px]'>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="single-card w-[692px] border-[1px] border-[#E0E0E0] rounded mt-[30px] mb-[16px]">
                        <div className='pt-[20px] px-[20px] card-main-info '>
                            <img src={card3sub} alt="" />
                            <div className='flex justify-between mt-[10px]'>
                                <h1 className=' text-[22px] font-semibold card-main-title'>Software Developer</h1>
                                <img className='h-[6px] mt-[9px]' src={doots} alt="" />
                            </div>
                            <div className='mt-12px inline mr-[44px]'>
                                <p className='font-semibold inline card-info'><BsBriefcase className='inline mb-[4px] mr-[6x] ' /> Innovaccer Analytics Private Ltd.</p>
                            </div>
                            <div className='mt-12px inline '>
                                <p className='font-semibold inline card-info'><IoLocationOutline className='inline mb-[4px] mr-[6x]' /> Noida, India</p>

                            </div>
                            <div className='mt-[16px] text-center rounded-lg border-[1px] border-[#A9AEB8]' >
                                <p className='text-[#02B875] text-[14px] font-semibold my-[10px]'>Apply on Timesjobs</p>
                            </div>
                            <div className='mt-[32px] flex justify-between content-center'>
                                <div className='view-main'>
                                    <img className='inline person-img ' src={person4} alt="" />
                                    <div className='font-semibold text-[18px] inline  person-name ml-[10px] mb-[0] h-[10px]'>
                                        Joseph Gray
                                        <br /> <span className='view-count hidden'>1.4k views</span>
                                    </div>

                                </div>
                                <div className='mt-[7px] mb-0'>
                                    <p className='text-[#525252] text-[14px] inline view-count-1'> <AiOutlineEye className='text-[19px] inline mr-[9px] font-medium' />1.4k views</p>
                                    <img className='bg-[#EDEEF0] p-[14px] inline ml-[40px] share-img1' src={shear} alt="" />

                                    <div className='bg-[#EDEEF0] rounded py-[9px] px-[13px] share-div mb-0'>
                                        <img className=' inline share-img' src={shear} alt="" />
                                        <span className='ml-[5px] text-[12px]'>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[50px] w-[243px] worrning-card'>
                    <div className='flex justify-between'>
                        <p className='font-semibold inline'><IoLocationOutline className='inline mb-[4px] mr-[6x] mb-[10px] ' /> Noida, India</p>
                        <FaPen />
                    </div>
                    <hr />
                    <div className='mt-[32px] flex '>
                        <img className='inline mr-[6px] h-[15px] mt-[4px]' src={worrning} alt="" />
                        <p className='text-[12px] font-semibold text-[#b9b9b9] inline'>Your location will help us serve better <br /> and extend a personalised experience. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigCard;