import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
      <div>
        <Link
          to="/"
          className={`font-bold text-light dark:text-primary text-xl `}
        >
          Bookify
        </Link>
      </div>
    );
};
export default NavLogo;