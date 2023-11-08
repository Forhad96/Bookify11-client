import useAuth from "../../hooks/useAuth";
const Avatar = () => {
  const { logOut } = useAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      console.log("logOut successful");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="avatar avatar-ring avatar-md">
      <div className="dropdown-container">
        <div className="dropdown">
          <label
            className="btn btn-ghost flex cursor-pointer px-0 hover:bg-inherit"
            tabIndex="0"
          >
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="avatar"
            />
          </label>
          <div className="dropdown-menu dropdown-menu-bottom-left">
            <a className="dropdown-item text-sm">Profile</a>
            <a tabIndex="-1" className="dropdown-item text-sm">
              Account settings
            </a>
            <a tabIndex="-1" className="dropdown-item text-sm">
              Subscriptions
            </a>
            <a onClick={handleLogout} className="navbar-item">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Avatar;
