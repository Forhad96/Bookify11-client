// import { GrGamepad } from "react-icons/gr";
// import { IoIosFitness } from "react-icons/io";
// import { GiHotMeal } from "react-icons/gi";
// import { TbHotelService } from "react-icons/tb";
const Facility = () => {
  return (
    <section className="mb-20 py-20  bg-gray-100">
      <div className="flex flex-col lg:flex-row relative container mx-auto px-5 gap-10">
        <div className="flex-1 ">
          <div>
            <img
              className="h-[600px] rounded-3xl"
              src="https://i.ibb.co/QdXpcY8/IMG-20231012-WA0000.jpg"
              alt=""
            />
          </div>
          <div className="absolute top-40 left-56 bg-white p-4 rounded-3xl">
            <img
              className="w-96  rounded-3xl"
              src="https://i.ibb.co/zScbXP6/IMG-20231012-WA0001.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-10">
            <p className="text-yellow-400 font-bold pb-2">BENEFIT</p>
            <h2 className="text-4xl text-black font-bold mb-3">
              Comfortable Facility <br /> Around Hotel
            </h2>
            <p>
              Welcome to our luxurious Comfortable Facility Around Hotel, where
              comfort meets elegance and convenience, With our platform, we also
              give customer the best facilities to enjoy while they stay in
              their favorite hotels. Nestled in the heart of a vibrant city, our
              hotel promises a truly remarkable and relaxing stay for both
              leisure and business travelers.
            </p>
          </div>

          <div className="mt-7">
            <div className="flex gap-5 mb-5">
              <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                {/* <GrGamepad></GrGamepad> */}
              </div>
              <div>
                <h3 className="text-xl font-bold">Free Accommodation</h3>
                <p>
                  Accommodation for you to enjoy exploring around the hotel.
                </p>
              </div>
            </div>

            <div className="flex gap-5 mb-5">
              <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                {/* <IoIosFitness></IoIosFitness> */}
              </div>
              <div>
                <h3 className="text-xl font-bold">Fitness Center</h3>
                <p>For those who likes to do fitness thing, fitness is free.</p>
              </div>
            </div>

            <div className="flex gap-5 mb-5">
              <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                {/* <GiHotMeal></GiHotMeal> */}
              </div>
              <div>
                <h3 className="text-xl font-bold">Free Breakfast</h3>
                <p>
                  Whose does not like meal in the morning, breakfast is free.
                </p>
              </div>
            </div>

            <div className="flex gap-5 mb-5">
              <div className="flex items-center text-2xl bg-gray-200 p-5 rounded-full">
                {/* <TbHotelService></TbHotelService> */}
              </div>
              <div>
                <h3 className="text-xl font-bold">Free Breakfast</h3>
                <p>
                  Our professional staff are committed to providing service.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Facility;
