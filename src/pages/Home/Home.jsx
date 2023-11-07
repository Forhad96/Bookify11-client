import Banner from "../../components/Banner/Banner";

import Promotions from "../../components/Promotions/Promotions";
import About from "../../components/Test/About";

import Facility from "../../components/Test/Facility";

import Review from "../../components/Test/Review";


import RoomCategory from "../RoomCategory/RoomCategory";
import RoomDetails from "../RoomDetails/RoomDetails";
import RoomReviews from "../RoomReviews/RoomReviews";

const Home = () => {

    return (
        <div >
            <Banner></Banner>
           <RoomCategory></RoomCategory>
            <Promotions></Promotions>
            
            <Facility></Facility>
            <Review></Review>
           <About></About>
           <RoomReviews></RoomReviews>
           <RoomDetails></RoomDetails>
        </div>
    );
};
export default Home;