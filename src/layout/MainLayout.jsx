import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";
import { useEffect } from "react";

// aos
import Aos from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
        useEffect(() => {
          Aos.init({ duration: 2000 });
        }, []);
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Header></Header>
            <div className="" >
            <Outlet></Outlet>
           
            </div>
            <Footer></Footer>
        </div>
    );
};
export default MainLayout;