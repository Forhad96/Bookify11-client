// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import images
import HeroImg1 from "../../../assets/banner/1.jpg";
import HeroImg2 from "../../../assets/banner/2.jpg";
import HeroImg3 from "../../../assets/banner/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background: HeroImg3,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background:
      "https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    background:
      "https://images.pexels.com/photos/7746082/pexels-photo-7746082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    btnText: "See our rooms",
  },

  {
    title: "Your Luxury Hotel For Vacation",
    background:
      "https://images.pexels.com/photos/14025904/pexels-photo-14025904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    btnText: "See our rooms",
  },
];
const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,

          disableOnInteraction: false,
        }}
        // className="h-[500px] lg:h-[660px]"
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <img src={slide.background} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
