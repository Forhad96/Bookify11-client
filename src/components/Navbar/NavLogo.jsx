import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
      <div>
        <Link
          to="/"
          className={`font-bold text-primary dark:text-primaryDark text-xl `}
        >
          Bookify
        </Link>
      </div>
    );
};
export default NavLogo;