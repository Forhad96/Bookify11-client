import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { NavLink, useLocation } from "react-router-dom";
import ThemeMode from "../ThemeMode/ThemeMode";
import useAuth from '../../hooks/useAuth'
const Header = () => {
  const [state, setState] = useState(false);
  const location = useLocation()
  const {user} = useAuth()
  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Rooms", path: "/rooms" },
    { title: "Bookings", path: "/bookings" },
    { title: "Contact", path: "/contact" },
    { title: "Pricing", path: "/pricing" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a
        href="/"
        className={`font-bold ${
          location.pathname === "/" && !state ? "text-white" : "text-light-text"
        }  dark:text-dark-text text-xl `}
      >
        Bookify
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`relative ${state ? "h-[400px]" : "null"} ${
        location.pathname === "/" ? "h-[550px] md:h-[700px]" : null
      }`}
    >
      <div
        className={`absolute inset-0 ${
          location.pathname !== "/" ? "hidden" : null
        }  blur-0 h-[580px]`}
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      >
        <Banner></Banner>
      </div>
      <div className="relative">
        <header>
          <div className={`md:hidden  ${state ? "mx-2 pb-5" : "hidden"}`}>
            <Brand />
          </div>
          <nav
            className={`pb-5 md:text-sm ${
              state
                ? "absolute  top-0 inset-x-0 bg-light-background dark:bg-dark-background shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  <ThemeMode></ThemeMode>
                  {navigation.map((item, idx) => {
                    return (
                      <NavLink
                        to={item.path}
                        key={idx}
                        className={` ${
                          location.pathname === "/" && !state
                            ? "text-white"
                            : "text-light-text"
                        } block dark:text-dark-text font-bold   hover:text-gray-900`}
                      >
                        {item.title}
                        {/* <a href={item.path} className="block">
                        </a> */}
                      </NavLink>
                    );
                  })}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  {user?.email ? (
                    <a
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
                  ) : (
                    <a
                      href="/login"
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-light-primary hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                    >
                      Sign in
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
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Header;
