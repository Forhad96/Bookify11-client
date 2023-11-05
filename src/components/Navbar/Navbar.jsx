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
          window.scrollY > 50 ? setScrolling(true) : setScrolling(false);
        });
  }, [location]);

  // const navBarClass = scrolling ? 'bg-white' : 'bg-transparent';














  const links = (
    <>
      <NavLink className="navbar-item">Home</NavLink>
      <NavLink className="navbar-item">About</NavLink>
      <NavLink className="navbar-item">Contact</NavLink>
    </>
  );

  return (
    <div
      className={`navbar bg-inherit sticky top-0 z-10  ${
        scrolling ? "bg-transparent" : "bg-white"
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
