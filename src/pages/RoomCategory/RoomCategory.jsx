import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import {Link} from 'react-router-dom'

const RoomCategory = () => {
const axios = useAxios() 

  // const { data, isLoading, isFetching, refetch } = useQuery({
  //   queryKey: ["roomsCategory"],
  //   queryFn: async () => {
  //     // const data = await fetch("http://localhost:3000/rooms");
  //     // return await data.json();

  //     const {data} = await axios.get('/rooms')
  //     return data
      
  //   },
  // });


  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center">
        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        <div className="2xl:mx-auto 3xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
                Room Category
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="girl-image"
                />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Details
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://images.pexels.com/photos/6032424/pexels-photo-6032424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="shoe-image"
                  />
                  <Link
                    to="/rooms"
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Details
                  </Link>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="watch-image"
                  />
                  <Link
                    to="/rooms"
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Details
                  </Link>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://images.pexels.com/photos/763148/pexels-photo-763148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="girl-image"
                />
                <Link
                  to="/rooms"
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Details
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="girl-image"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://images.pexels.com/photos/6585746/pexels-photo-6585746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="olive-tatiana-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <Link
                  to="/rooms"
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Details
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>
            <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src="https://images.pexels.com/photos/7166552/pexels-photo-7166552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="girl-image"
              />
              <img
                className="object-center object-cover h-full w-full sm:hidden"
                src="https://images.pexels.com/photos/6933767/pexels-photo-6933767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="olive-tatiana-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <Link
                to="/rooms"
                className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
              >
                Details
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoomCategory;
