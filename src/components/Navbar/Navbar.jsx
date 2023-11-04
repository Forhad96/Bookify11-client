import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import NavLogo from "./Navlogo";
import Avatar from "./Avatar";
import ThemeMode from "../ThemeMode/ThemeMode";

const Navbar = () => {
  const links = (
    <>
      <NavLink className="navbar-item">Home</NavLink>
      <NavLink className="navbar-item">About</NavLink>
      <NavLink className="navbar-item">Contact</NavLink>
    </>
  );
  return (
    <div className="navbar">
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
