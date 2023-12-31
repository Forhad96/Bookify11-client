// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper,  } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Slider.css";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

export default function Slider({ children }) {
  //   {
  //     img_url:
  //       "https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033_1280.jpg",
  //     description: "Bar Scene",
  //   },
  //   {
  //     img_url:
  //       "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png",
  //     description: "Social Media Icons",
  //   },
  //   {
  //     img_url:
  //       "https://cdn.pixabay.com/photo/2016/03/27/22/04/camera-1284459_1280.jpg",
  //     description: "Camera",
  //   },
  //   {
  //     img_url:
  //       "https://cdn.pixabay.com/photo/2018/04/27/03/51/technology-3353701_1280.jpg",
  //     description: "Technology",
  //   },
  //   {
  //     img_url:
  //       "https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031_1280.jpg",
  //     description: "Time",
  //   },
  //   {
  //     img_url:
  //       "https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg",
  //     description: "Blur Background",
  //   },
  // ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, EffectFade]}
        className="mySwiper "
      >
        {children}
      </Swiper>
    </>
  );
}
Slider.propTypes = {
  children: PropTypes.node.isRequired,
};
