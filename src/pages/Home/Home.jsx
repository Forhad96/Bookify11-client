import Banner from "../../components/Banner/Banner";

import Promotions from "../../components/Promotions/Promotions";


import Facility from "../../components/Test/Facility";

import Review from "../../components/Test/Review";
import About from "../About/About";


import RoomCategory from "../RoomCategory/RoomCategory";


const Home = () => {

    return (
        <div >
            <Banner></Banner>
            <Promotions></Promotions>
           <RoomCategory></RoomCategory>
            <Facility></Facility>
            <Review></Review>
           <About></About>


        </div>
    );
};
export default Home;