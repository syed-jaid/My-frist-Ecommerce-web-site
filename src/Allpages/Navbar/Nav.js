import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsBookmarkStar, BsPersonBoundingBox } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const Nav = () => {
    const manus = <>
        <li><a className='font-semibold' href='/'>Home</a></li>
        <li><a className='font-semibold' href='/'>Shop</a></li>
        <li><a className='font-semibold' href='/'>Pahes</a></li>
        <li><a className='font-semibold' href='/'>Blog</a></li>
        <li><a className='font-semibold' href='/'>Features</a></li>
    </>
    return (
        <nav>
            <div class="navbar h-[90px] xl:w-[1280px] mx-auto p-0">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manus}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-3xl font-bold" href='/'>SJaid</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {manus}
                    </ul>
                </div>
                <div class="navbar-end">
                    <BiSearch className='text-[20px] mx-[15px]' />
                    <BsPersonBoundingBox className='text-[20px] mx-[15px]' />
                    <BsBookmarkStar className='text-[20px] mx-[15px]' />
                    <FiShoppingCart className='text-[20px] mx-[15px]' />
                </div>
            </div>
            <div className='bg-[#1f1f1f] py-[15px]'>
                <p className='text-center text-white text-[13px] font-semibold font-sans'>GET 20% SALE WITH CUPPONE CODE CGBNJKI25  </p>
            </div>
        </nav>
    );
};

export default Nav;