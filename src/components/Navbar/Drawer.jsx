import { NavLink } from "react-router-dom";
import NavLogo from "./Navlogo";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const Drawer = () => {
  const {user} = useAuth()
    const links = (
      <div className="flex flex-col gap-6">
        <NavLink to="/" className="me-4 font-semibold">
          Home
        </NavLink>
        <NavLink to="/rooms" className="me-4 font-semibold">
          Rooms
        </NavLink>
        {user?.email && (
          <NavLink to="/bookings" className="me-4 font-semibold">
            Bookings
          </NavLink>
        )}
        <NavLink to="/about" className="me-4 font-semibold">
          About
        </NavLink>
        <NavLink to="/contact" className="me-4 font-semibold">
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
      </div>
    );
    return (
      <div className="block md:hidden">
        <input type="checkbox" id="drawer-left" className="drawer-toggle" />

        <label htmlFor="drawer-left" className="btn btn-sm dark:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          
        </label>
        <label className="overlay" htmlFor="drawer-left"></label>
        <div className="drawer bg-primary dark:bg-black/60">
          <div className="drawer-content pt-10 flex flex-col h-full">
            <div className="absolute top-3">

                <NavLogo></NavLogo>
            </div>
            <label
              htmlFor="drawer-left"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="dark:text-textDark">
              {links}

            </div>
            <div className="h-full flex flex-row justify-end items-end gap-2">
              <button className="btn btn-ghost">Cancel</button>
              <button className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Drawer;



