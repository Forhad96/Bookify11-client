import Banner from "../../components/Banner/Banner";
import Promotions from "../../components/Promotions/Promotions";
import About from "../../components/Test/About";
import Contact from "../../components/Test/Contact";
import Facility from "../../components/Test/Facility";

import HotelCard from "../../components/Test/HotelCard";
import Review from "../../components/Test/Review";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Promotions></Promotions>
            <HotelCard></HotelCard>
            <Facility></Facility>
            <Review></Review>
           <Contact></Contact>
           
           <About></About>
        </div>
    );
};
export default Home;