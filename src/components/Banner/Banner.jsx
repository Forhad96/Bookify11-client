// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

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
        modules={[Autoplay, EffectFade, A11y]}
        spaceBetween={50}
        // slidesPerView={1}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,

          disableOnInteraction: false,
        }}
        className=" lg:h-[660px]"
      >
        {slides.map((slides, idx) => (
          <SwiperSlide
            className="relative flex h-full items-center justify-center bg-pink-200"
            key={idx}
          >
            {/* hero data */}
            <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  container z-20 mx-auto text-center text-white">
              <div className="mb-5 font-tertiary uppercase tracking-[6px]">
                Just Enjoy & Relax
              </div>
              <h1 className="mx-auto mb-6 max-w-[920px] font-primary text-[32px] uppercase tracking-[2px] lg:text-[68px]">
                {slides.title}
              </h1>
              <button className="btn btn-primary btn-lg mx-auto">
                {slides.btnText}
              </button>
              {/* :BIG BUTTON 1 */}
              <button className="group relative inline-flex items-center  px-7 py-3.5 rounded shadow-lg outline-none bg-gradient-to-br from-cyan-500 to-green-500 text-lg text-white font-medium transition-all duration-200 ease-out hover:text-yellow-700 hover:from-transparent hover:to-transparent hover:shadow-none active:top-0.5 focus:outline-none">
                {/* span::before */}
                <span
                  className="absolute h-0 w-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out group-hover:h-full"
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-yellow-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
                  aria-hidden="true"
                />
                Button 1{/* span::after */}
                <span
                  className="absolute left-0 bottom-0 bg-gradient-to-br from-pink-500 to-green-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
                  aria-hidden="true"
                />
                <span
                  className="absolute w-0 h-0.5 right-0 top-0 bg-gradient-to-br from-pink-500 to-green-500 transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* hero background */}
            <div className="absolute top-0 left-0 h-full w-full">
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
