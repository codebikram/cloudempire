import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer/Footer.component";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <nav className='p-4 flex justify-between items-center bg-gray-800 text-white fixed top-0 left-0 right-0 shadow-md'>
        <NavLink
          to='/'
          className='font-bold text-3xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 bg-clip-text text-transparent'
        >
          CloudEmpire
        </NavLink>
        <button className='md:hidden' onClick={handleClick}>
          {!show ? <GiHamburgerMenu /> : <IoMdClose />}
        </button>
        <ul className='hidden md:flex md:gap-10'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-80"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blogs'
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-80"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:opacity-80"
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul
        className={`${
          show
            ? "min-h-screen bg-gray-800 text-3xl items-center justify-center pt-10 z-10 text-white flex gap-6 flex-col md:hidden"
            : "hidden"
        }`}
      >
        <li onClick={handleClick}>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? "font-semibold" : "hover:opacity-80"
            }
          >
            Home
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to='/blogs'
            className={({ isActive }) =>
              isActive ? "font-semibold" : "hover:opacity-80"
            }
          >
            Blogs
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? "font-semibold" : "hover:opacity-80"
            }
          >
            Contact us
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
