import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
const Avatar = () => {
  const { logOut, user } = useAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("successfully logged out");
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
            {user?.email && <img src={user?.photoURL} alt="avatar" />}
          </label>
          <div className="dropdown-menu dropdown-menu-bottom-left">
            <a className="dropdown-item text-xl text-dark ">Profile</a>
            {/* <a tabIndex="-1" className="dropdown-item text-sm">
              Account settings
            </a>
            <a tabIndex="-1" className="dropdown-item text-sm">
              Subscriptions
            </a> */}
            <a onClick={handleLogout} className="navbar-item text-xl">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Avatar;
