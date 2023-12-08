import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loading from "../Shared/Loading/Loading";
import { useState } from "react";
import BookingsConfirm from "./BookingsConfirm";
import useModal from "../../hooks/useModal";
import DateCheckIn from "react-tailwindcss-datepicker";
import ReactStarsRating from "react-awesome-stars-rating";
import RoomReviews from "../RoomReviews/RoomReviews";
import tost from "react-hot-toast";
import { Helmet } from "react-helmet";
import SpacialOffer from "../Shared/SpacialOffer/SpacialOffer";

import Gallery from "../Shared/Gallery/Gallery";
const RoomDetails = () => {
  const axios = useAxios();
  const { id } = useParams();
  const { openModal, closeModal, isOpenModal } = useModal();
  const [dateObj, setDateObj] = useState({
    startDate: null,
    endDate: null,
  });
  const [disabled, setDisabled] = useState(true);

  const { data: room, isLoading } = useQuery({
    queryKey: ["roomDetails"],
    queryFn: async () => {
      const { data } = await axios.get(`/rooms/${id}`);
      return data;
    },
  });

  const {
    _id,
    description,
    category,
    price,
    size,
    availability,
    images,
    special_offers,
    reviews,
    bookedDates,
  } = room || {};

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDateChange = async (newValue) => {
    setDateObj(newValue);
    setDisabled(false);
  };
  const handleBooking = async () => {
    if (availability <= 0) {
      return tost.error("No available rooms");
    }
    if (dateObj.startDate === null && dateObj.endDate === null) {
      return tost.error("Please select date first");
    }

    if (disabled) {
      return tost.error("please log in First");
    } else {
      openModal();
       document.getElementById("my_modal_1").showModal();
    }
  };

  return (
    <section className=" py-10 font-poppins dark:bg-gray-800">
      <Helmet>
        <title>Room Details</title>
      </Helmet>
      <SpacialOffer></SpacialOffer>
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-full">
                <Slider>
                  {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={slide.background} alt="" />
                    </SwiperSlide>
                  ))}
                </Slider>
                <Gallery></Gallery>
              </div>
            </div>
          </div>
          <div className="w-full  px-4 md:w-1/2">
            <div className=" relative md:static lg:pl-20">
              <div className="mb-6 ">
                <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                  {category}
                </span>
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                  {description}
                </h2>
                <div className="flex flex-row items-center mb-6">
                  <ReactStarsRating className="flex"></ReactStarsRating>
                </div>
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  <span>${price}</span>
                  <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                    $.399.00
                  </span>
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                  Facility :
                </h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <div className="p-3 lg:p-5 ">
                    <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        <div className="w-full mb-4 md:w-2/5">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-diagram-3 w-7 h-7"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                                />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Availability
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                {availability} Rooms
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="w-full mb-4 md:w-2/5">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-gpu-card w-7 h-7"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                                <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
                                <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Food
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                Yes
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="w-7 h-7 bi bi-cpu"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Room size
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                {size}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                          <div className="flex ">
                            <span className="mr-3 text-gray-500 dark:text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-clock-history w-7 h-7"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                              </svg>
                            </span>
                            <div>
                              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                Service
                              </p>
                              <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                24-hour
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                <span className="text-base text-gray-600 dark:text-gray-400">
                  More Details
                </span>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                  <span className="text-gray-600 dark:text-gray-400">
                    Step into the lap of luxury with our Exclusive Grand Suite.
                    This opulent 800 sq ft suite offers a perfect blend of
                    comfort and sophistication, providing you with an
                    unparalleled experience. Enjoy breathtaking panoramic views
                    from your private balcony, where the skyline meets the
                    horizon in a mesmerizing dance of colors. Indulge in our spa
                    facilities with an exclusive spa indulgence package,
                    featuring a private Jacuzzi for the ultimate relaxation. The
                    executive lounge access, fitness center, and 24-hour
                    concierge service ensure that every aspect of your stay is
                    attended to with the utmost care. Immerse yourself in
                    gourmet dining with options like a fine dining restaurant,
                    in-room dining, and a cocktail bar with a view. The culinary
                    delights are complemented by special offers, including a
                    generous 20% off for a week's stay and a complimentary
                    exclusive spa indulgence package. With only 3 suites
                    available, this Exclusive Grand Suite promises an intimate
                    and unforgettable escape for those seeking the pinnacle of
                    luxury."
                  </span>
                </p>
              </div>

              <div className="flex gap-4 mb-6">
                <DateCheckIn
                  primaryColor={"red"}
                  disabledDates={room?.bookedDates}
                  value={dateObj}
                  onChange={(newValue) => handleDateChange(newValue)}
                ></DateCheckIn>
              </div>
              <div className=" flex gap-4 mb-6">
                <a
                  disabled={disabled}
                  onClick={handleBooking}
                  className={`w-full ${
                    disabled ? "cursor-not-allowed" : "cursor-pointer"
                  } px-4 py-3 text-center text-gray-100 bg-light-primary  border border-transparent dark:border-gray-700 hover:border-_hover hover:text-blue-700 hover:bg-blue-100 dark:text-dark-text dark:bg-dark-accent dark:hover:bg-gray-900 rounded-xl`}
                >
                  Book Now
                </a>
              </div>
              <Modal>
                  <BookingsConfirm
                    room={room}
                    dateObj={dateObj}
                  ></BookingsConfirm>
              
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <RoomReviews reviews={reviews}></RoomReviews>
    </section>
  );
};
export default RoomDetails;
// import images
import HeroImg1 from "../../assets/banner/1.jpg";
import HeroImg2 from "../../assets/banner/2.jpg";
import HeroImg3 from "../../assets/banner/3.jpg";
import Slider from "../Shared/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import Modal from "../Shared/Modal/Modal";
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
