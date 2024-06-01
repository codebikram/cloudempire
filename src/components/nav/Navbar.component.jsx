import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer/Footer.component";
import logo from "../../assets/Cloudempire_Logo.png";
const Navbar = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <nav className=' p-3 md:pl-16 md:pr-16 flex justify-between items-center bg-gray-800 text-white fixed top-0 left-0 right-0 shadow-md z-40'>
        <NavLink
          to='/'
          className='font-bold text-3xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 bg-clip-text text-transparent'
        >
          <img src={logo} alt='cloud empire logo' className='w-52 h-12' />
        </NavLink>
        <button className='md:hidden' onClick={handleClick}>
          {!show ? <GiHamburgerMenu /> : <IoMdClose />}
        </button>
        <ul className='hidden md:flex md:gap-10'>
          {links.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "font-semibold" : "hover:opacity-80"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul
          className={`${
            show
              ? "min-h-screen bg-gray-800 text-3xl items-center justify-center text-white flex gap-6 flex-col md:hidden absolute top-16 left-0 right-0 z-50"
              : "hidden"
          }`}
        >
          {links.map((item, i) => (
            <li key={i} onClick={handleClick}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "font-semibold" : "hover:opacity-80"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
