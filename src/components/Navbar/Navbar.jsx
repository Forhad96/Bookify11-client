import { NavLink, useLocation } from "react-router-dom";
import Drawer from "./Drawer";
import NavLogo from "./NavLogo";
import Avatar from "./Avatar";
import ThemeMode from "../ThemeMode/ThemeMode";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setScrolling(true) : setScrolling(false);
    });
  });

  // const navBarClass = scrolling ? 'bg-white' : 'bg-transparent';

  const links = (
    <>
      <NavLink to="/" className="navbar-item dark:text-white font-semibold">
        Home
      </NavLink>
      <NavLink
        to="/rooms"
        className="navbar-item dark:text-white font-semibold"
      >
        Rooms
      </NavLink>
      <NavLink
        to="/about"
        className="navbar-item dark:text-white font-semibold"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="navbar-item dark:text-white font-semibold"
      >
        Contact
      </NavLink>
      <NavLink
        to="/login"
        className="navbar-item dark:text-white font-semibold"
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="navbar-item dark:text-white font-semibold"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <div
      className={` flex  items-center ${
        location.pathname === "/" ? "navbar-floating" : "navbar"
      } ${
        scrolling ? "bg-white dark:bg-gray-700 sticky top-0" : ""
      }`}
    >
      <div className="navbar-start">
        <Drawer>{links}</Drawer>
        <NavLogo></NavLogo>
      </div>
      <div className="navbar-center">{links}</div>
      <div className="navbar-end">
        <ThemeMode></ThemeMode>
        <Avatar></Avatar>
        <a className="navbar-item">Login</a>
      </div>
    </div>
  );
};
export default Navbar;
