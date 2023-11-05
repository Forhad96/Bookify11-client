import React, { useState, useEffect } from "react";
import NavLogo from "../Navbar/Navlogo";



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
      <a href="/spa" className="transition hover:text-accent">
        Spa
      </a>
      <a href="/contact" className="transition hover:text-accent">
        Contact
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
          <a href="/">
            <NavLogo header={header}></NavLogo>
          </a>

          {/* header menu */}
          <div className={`${header ? "text-primary" : "text-white"}`}>
            <ul className="flex items-center gap-x-6 font-tertiary text-[15px] uppercase tracking-[1.5px] lg:gap-x-8">
                {links}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
