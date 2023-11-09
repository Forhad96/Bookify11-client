import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";

import Promotions from "../../components/Promotions/Promotions";


import Facility from "../../components/Test/Facility";

import Review from "../../components/Test/Review";
import About from "../About/About";


import RoomCategory from "../RoomCategory/RoomCategory";
import Header from "../../components/Header/Header";


const Home = () => {

    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        {/* <Banner></Banner> */}
        {/* <Header></Header> */}
        <RoomCategory></RoomCategory>
        <Promotions></Promotions>
        <Facility></Facility>
        <About></About>
        <Review></Review>
      </div>
    );
};
export default Home;