import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const LogOut = () => {
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
      <a
        onClick={handleLogout}
        href="/login"
        className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-light-primary hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
      >
        Sign out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    );
};
export default LogOut;