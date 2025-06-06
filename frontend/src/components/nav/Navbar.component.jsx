import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer/Footer.component";
import logo from "../../assets/app-logo/Cloudempire_Logo.png";
import { LINKS } from "../../data/data.js";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
    if (!show) {
      setNavBar(true);
    } else {
      setNavBar(false);
      changeBackgroundColor();
    }
  };
  const changeBackgroundColor = () => {
    if (window.scrollY >= 75) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <>
      <nav
        className={
          navBar
            ? "p-3 md:pl-16 md:pr-16 flex justify-between items-center text-white fixed top-0 left-0 right-0 z-40 bg-gray-800 shadow-md"
            : "p-3 md:pl-16 md:pr-16 flex justify-between items-center text-white fixed top-0 left-0 right-0 z-40 bg-transparent"
        }
      >
        <NavLink
          to='/'
          className='font-bold text-3xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 bg-clip-text text-transparent'
        >
          <img
            src={logo}
            alt='cloud empire logo'
            className='w-full h-12 object-contain'
          />
        </NavLink>
        <button className='md:hidden' onClick={handleClick}>
          {!show ? <GiHamburgerMenu /> : <IoMdClose />}
        </button>
        <ul className='hidden md:flex md:gap-10'>
          {LINKS.map((item, i) => (
            <li key={i} className=''>
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
          {LINKS.map((item, i) => (
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
