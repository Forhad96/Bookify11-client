import  { useState, useEffect } from "react";
import NavLogo from "../Navbar/NavLogo";
import {Link, NavLink} from 'react-router-dom'


const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  const links = (
    <>
      <a href="/about" className="transition hover:text-accent">
        About
      </a>
      <a href="/rooms" className="transition hover:text-accent">
        Rooms
      </a>
      <a href="/restaurants" className="transition hover:text-accent">
        Restaurants
      </a>

      <NavLink to="/contact" className="transition hover:text-accent">
        Contact
      </NavLink>
      <a
        href="#link"
        className="group relative inline-block outline-none no-underline  tracking-wide antialiased focus:outline-none"
      >
        {/* a::before */}
        <span
          className="inline-block opacity-0 mr-2.5 transition-all duration-300 transform translate-x-5 group-hover:opacity-100 group-hover:translate-x-0"
          aria-hidden="true"
        >
          [
        </span>
        NavItem 1{/* a::after */}
        <span
          className="inline-block opacity-0 ml-2.5 transition-all duration-300 transform -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0"
          aria-hidden="true"
        >
          ]
        </span>
      </a>
    </>
  );
  

  return (
    <header className="header">
      <div
        className={`${
          header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
        } fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* header logo */}
          <Link to="/">
            <NavLogo header={header}></NavLogo>
          </Link>

          {/* header menu */}
          <div className={`${header ? "text-primary" : "text-white"}`}>
            <ul className="hidden md:flex items-center gap-x-6 font-tertiary text-[15px] uppercase tracking-[1.5px] lg:gap-x-8">
                {links}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
