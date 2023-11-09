import { Link, useLocation } from "react-router-dom";

const NavLogo = () => {
  const location = useLocation();
  return (
    <div>
      <Link
        to="/"
        className={`font-bold ${
          location.pathname === "/" ? "text-white" : "text-light-text"
        }  dark:text-dark-text text-xl `}
      >
       
      </Link>
    </div>
  );
};
export default NavLogo;
