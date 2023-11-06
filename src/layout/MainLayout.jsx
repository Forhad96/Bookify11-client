import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                {/* <Header></Header> */}
            <div  >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default MainLayout;