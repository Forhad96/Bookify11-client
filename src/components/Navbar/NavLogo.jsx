const NavLogo = ({header}) => {
    return (
      <div>
        <a className={`font-bold text-xl ${header ? "text-primary" : "text-white"}`}>Bookify</a>
      </div>
    );
};
export default NavLogo;