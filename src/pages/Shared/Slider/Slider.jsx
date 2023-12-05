// import Swiper core and required modules
import { A11y, Autoplay, EffectFade } from "swiper/modules";

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
    background: HeroImg1,
  },
  {
    background: HeroImg2,
  },
  {
    background: HeroImg3,
  },
  {
    background: HeroImg1,
  },
  {
    background: HeroImg2,
  },
  {
    background: HeroImg3,
  },
  {
    background: HeroImg1,
  },
  {
    background: HeroImg2,
  },
  {
    background: HeroImg3,
  },
  {
    background:
      "https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    background:
      "https://images.pexels.com/photos/7746082/pexels-photo-7746082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    background:
      "https://images.pexels.com/photos/14025904/pexels-photo-14025904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
