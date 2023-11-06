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
      <NavLink to="/" className="navbar-item">
        Home
      </NavLink>
      <NavLink to="/rooms" className="navbar-item">
        Rooms
      </NavLink>
      <NavLink to="/about" className="navbar-item">
        About
      </NavLink>
      <NavLink to="/contact" className="navbar-item">
        Contact
      </NavLink>
      <NavLink to="/login" className="navbar-item">
        Login
      </NavLink>
      <NavLink to="/registration" className="navbar-item">
        Register
      </NavLink>
    </>
  );

  return (
    <div
      className={` flex items-center ${
        location.pathname === "/"?"navbar-floating" :'navbar'
      } ${ scrolling ? "navbar sticky top-0":''}`}
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
