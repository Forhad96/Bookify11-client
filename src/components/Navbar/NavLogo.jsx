import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
      <div>
        <Link
          to="/"
          className={`font-bold dark:text-_primary text-white text-xl `}
        >
          Bookify
        </Link>
      </div>
    );
};
export default NavLogo;