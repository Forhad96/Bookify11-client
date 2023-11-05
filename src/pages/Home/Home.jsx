import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import Promotions from "../../components/Promotions/Promotions";
import About from "../../components/Test/About";

import Facility from "../../components/Test/Facility";

import HotelCard from "../../components/Test/HotelCard";
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
            <HotelCard></HotelCard>
            <Facility></Facility>
            <Review></Review>

           <Faq></Faq>
           <About></About>
           <RoomReviews></RoomReviews>
           <RoomDetails></RoomDetails>
        </div>
    );
};
export default Home;