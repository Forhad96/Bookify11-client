import { Link, NavLink, useLocation } from "react-router-dom";
import Drawer from "./Drawer";

import Avatar from "./Avatar";
import ThemeMode from "../ThemeMode/ThemeMode";
import { useEffect, useState } from "react";
import NavLogo from "./Navlogo";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user} = useAuth()
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setScrolling(true) : setScrolling(false);
    });
  });

  const links = (
    <>
      <NavLink to="/" className="me-4 font-semibold">
        Home
      </NavLink>
      <NavLink
        to="/rooms"
        className="me-4 font-semibold"
      >
        Rooms
      </NavLink>
      {user?.email && (
        <NavLink
          to="/bookings"
          className="me-4 font-semibold"
        >
          Bookings
        </NavLink>
      )}
      <NavLink
        to="/about"
        className="me-4 font-semibold"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="me-4 font-semibold"
      >
        Contact
      </NavLink>
      {/* <NavLink
        to="/login"
        className="ark:text-white font-semibold"
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="navbar-item dark:text-white font-semibold"
      >
        Register
      </NavLink> */}
    </>
  );

  return (
    <div
      className={` flex items-center justify-center max-w-7xl mx-auto ${
        location.pathname === "/" ? "navbar-floating text-light" : "navbar"
      } ${
        scrolling ? "bg-primary navbar dark:bg-backgroundDark z-20 sticky top-0" : ""
      }`}
    >
      <div className="navbar-start">
        <Drawer >{links}</Drawer>
        <NavLogo></NavLogo>
      </div>
      <div className="navbar-center hidden md:block">{links}</div>
      <div className="navbar-end">
        <ThemeMode></ThemeMode>
        {user?.email ? (
          <Avatar></Avatar>
        ) : (
          <NavLink
            to="/login"
            className="navbar-item dark:text-white font-semibold"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default Navbar;
