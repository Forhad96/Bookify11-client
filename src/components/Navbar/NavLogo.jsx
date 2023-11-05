const NavLogo = ({header}) => {
    return (
      <div>
        <p className={`font-bold text-xl ${header ? "text-primary" : "text-white"}`}>Bookify</p>
      </div>
    );
};
export default NavLogo;