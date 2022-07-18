import React from 'react';
import logo from '../Img/logo.png';
import fb from '../Img/card/fb.png';
import gogoel from '../Img/card/gogle.png';
import login from '../Img/card/login Img.png';
import { AiOutlineSearch, AiOutlineArrowLeft } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 h-[72px] px-[80px] navbar-main-div">
                <div className="navbar-start">
                    <div className="dropdown">
                        <img className='h-[24px] ' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center">
                    <div className='bg-[#F2F2F2] py-[12px] w-[360px] rounded-[21px] flex justify-start content-center'>
                        <AiOutlineSearch className='mx-[17px] mt-[4px] text-[#5C5C5C] font-bold' /><input type="text" className='w-[250px] bg-[#F2F2F2] text-[ #5C5C5C] font-semibold text-center text-[14px] ' placeholder='Search for your favorite groups in ATG' />
                    </div>
                </div>
                <div className="navbar-end">
                    <button className='font-semibold '> Create account.<label for="login-modal" class=" modal-button"> <span className='text-[#2F6CE5]'> It’s free!</span></label></button>
                </div>
            </div>
            <div className="navbar absolute h-[72px] px-[20px] pt-[20px] navbar-main-div2 hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <AiOutlineArrowLeft className='text-[white]' />
                    </div>
                </div>

                <div className="navbar-end">
                    <button className='font-semibold '><label for="login-modal" class=" modal-button"> <span className='text-[white] border border-[white] rounded p-[8px]'>Join Group</span></label></button>
                </div>
            </div>

            <input type="checkbox" id="login-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle flex justify-center content-center">
                <div class="bg-[white] w-[736px] h-[564px] rounded-[8px]">
                    <div className='flex justify-between bg-[#EFFFF4] pl-[50px] py-[17px] rounded'>
                        <h3 class="font-bold text-[14px] text-[#008A45]" >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h3>
                        <div className='flex justify-end inline relative'> <label for="login-modal" class="btn btn-sm btn-circle absolute ">✕</label></div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <h1 className='text-[25px] mt-[24px] ml-[36px] mb-[24px] font-bold'>Create Account</h1>
                            <form className='ml-[36px] form-div'>
                                <input type="text" className='w-[160px] p-[13px] bg-[#f7f8fa] border border-[#e5e5e6]' placeholder='First Name' />
                                <input type="text" className='w-[160px] p-[13px] bg-[#f7f8fa] border border-[#e5e5e6]' placeholder='Last Name' />
                                <div>
                                    <input type="text" className='w-[320px] p-[13px] bg-[#f7f8fa] border border-[#e5e5e6]' placeholder='Email' />
                                </div>
                                <div>
                                    <input type="text" className='w-[320px] p-[13px] bg-[#f7f8fa] border border-[#e5e5e6]' placeholder='Password' />
                                </div>
                                <div>
                                    <input type="text" className='w-[320px] p-[13px] bg-[#f7f8fa] border border-[#e5e5e6]' placeholder='Confirm Password' />
                                </div>
                                <input type='submit' value='Create Account' className='w-[320px] p-[13px] bg-[#2F6CE5] rounded-[20px] mt-[19px] mb-[24px] text-[white]' />
                                <div className='border border-[#e5e5e6] py-[11px] w-[320px] flex justify-center'>
                                    <img src={fb} alt="" />
                                </div>
                                <div className='border border-[#e5e5e6] py-[11px] w-[320px] flex justify-center mt-[8px]'>
                                    <img src={gogoel} alt="" />
                                </div>
                            </form>
                        </div>
                        <div className='login-card'>
                            <p className='mt-[41px] ml-[100px]'>Already have an account? <span className='text-[#2F6CE5] font-semibold'>Sign In</span></p>
                            <img className='ml-[20px] mt-[35px]' src={login} alt="" />
                            <p className='text-[11px] ml-[30px] text-[#ababab]'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;