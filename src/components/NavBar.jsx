import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const navMenu = <>
        <li className='text-xl'><NavLink to="/">HOME</NavLink></li>
        <li className='text-xl'><NavLink to="/blogs">BLOGS</NavLink></li>
        <li className='text-xl'><NavLink to="/">ABOUT</NavLink></li>
        <li className='text-xl'><NavLink to="/contactus">CONTACT US</NavLink></li>
    </>
    return (
        <div className='roboto max-w-screen-xl'>
            <div className="navbar fixed bg-white border-b-1 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navMenu
                            }
                        </ul>
                    </div>
                    <Link to="/">
                        <div className='flex items-center gap-2'>
                            <img src="https://i.postimg.cc/QMg0tfhg/508280ba-4d45-42e5-a712-2660862667b0.jpg" className='h-20' alt="" />
                            <div className='text-2xl font-semibold'>
                                <p className='text-[#640D6B]'>Maternal</p>
                                <p className='text-[#B51B75]'>Health</p>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navMenu
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;