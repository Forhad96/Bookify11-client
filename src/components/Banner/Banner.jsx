// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import images
import HeroImg1 from "../../assets/banner/1.jpg";
import HeroImg2 from "../../assets/banner/2.jpg";
import HeroImg3 from "../../assets/banner/3.jpg";

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
];
const Banner = () => {
  return (
    <section className="hero">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="heroSlider h-[600px] lg:h-[860px]"
      >
        {slides.map((slides, idx) => (
          <SwiperSlide
            className="relative flex h-full items-center justify-center bg-pink-200"
            key={idx}
          >
            {/* hero data */}
            <div className="container z-20 mx-auto text-center text-white">
              <div className="mb-5 font-tertiary uppercase tracking-[6px]">
                Just Enjoy & Relax
              </div>
              <h1 className="mx-auto mb-6 max-w-[920px] font-primary text-[32px] uppercase tracking-[2px] lg:text-[68px]">
                {slides.title}
              </h1>
              <button className="btn btn-primary btn-lg mx-auto">
                {slides.btnText}
              </button>
            </div>

            {/* hero background */}
            <div className="absolute flex top-0 left-0 h-full w-full">
              <img
                src={slides.background}
                alt="hero slide image"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* hero overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-black/50" />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </section>
  );
};
export default Banner;
// {
//   slides.map((slide, index) => {
//     // destructure slide
//     const { title, background, btnText } = slide;

//     return (
//       <SwiperSlide
//         className="relative flex h-full items-center justify-center bg-pink-200"
//         key={index}
//       >
//         {/* hero data */}
//         <div className="container z-20 mx-auto text-center text-white">
//           <div className="mb-5 font-tertiary uppercase tracking-[6px]">
//             Just Enjoy & Relax
//           </div>
//           <h1 className="mx-auto mb-6 max-w-[920px] font-primary text-[32px] uppercase tracking-[2px] lg:text-[68px]">
//             {title}
//           </h1>
//           <button className="btn btn-primary btn-lg mx-auto">
//             {btnText}
//           </button>
//         </div>

//         {/* hero background */}
//         <div className="absolute top-0 left-0 h-full w-full">
//           <img
//             src={background}
//             alt="hero slide image"
//             className="h-full w-full object-cover object-center"
//           />
//         </div>

//         {/* hero overlay */}
//         <div className="absolute top-0 left-0 h-full w-full bg-black/50" />
//       </SwiperSlide>
//     );
//   });
// }
