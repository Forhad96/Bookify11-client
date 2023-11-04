import NavLogo from "./Navlogo";

const Drawer = ({children}) => {
    return (
      <div>
        <input type="checkbox" id="drawer-left" className="drawer-toggle" />

        <label htmlFor="drawer-left" className="btn btn-sm">
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
          
        </label>
        <label className="overlay" htmlFor="drawer-left"></label>
        <div className="drawer">
          <div className="drawer-content pt-10 flex flex-col h-full">
            <div className="absolute top-3">

                <NavLogo></NavLogo>
            </div>
            <label
              htmlFor="drawer-left"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex flex-col">
              {children}

            </div>
            <div className="h-full flex flex-row justify-end items-end gap-2">
              <button className="btn btn-ghost">Cancel</button>
              <button className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Drawer;



