import Room from "./Room";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "../Shared/Loading/Loading";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const Rooms = () => {
  const axios = useAxios();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  // const [rooms,setRooms] = useState(data)
  const {
    data: rooms,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allRooms"],
    queryFn: async () => {
      const { data } = await axios.get(
        `/rooms/?minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      return data;
    },
  });

// useEffect(()=>{

// },[maxPrice,refetch])
    if (maxPrice) {
      refetch();
    }

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleSearch = (event) => {
    // event.preventDefault();
    // const from = new FormData(event.target);
    // const minPrice = from.get("minPrice");
    // const maxPrice = from.get("minPrice");
    // setMinPrice(minPrice);
    // setMinPrice(maxPrice);
  };




  return (
    <div>
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <div className="text-center">
        <div className="font-tertiary text-[15px] uppercase tracking-[6px]">
          Bookify
        </div>
        <h2 className="mb-4 font-primary text-[32px] lg:text-[45px]">
          Hotel & Suites
        </h2>
      </div>
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center justify-center md:flex-row gap-3"
      >
        <div className="flex">
          {/* <input
            id="pricingType"
            name="minPrice"
            type="number"
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min value"
            className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          /> */}
          <input
            id="pricingType"
            type="number"
            name="maxPrice"
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Enter your max baguet"
            className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          />

          {/* <button
            type="submit"
            className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button> */}
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {rooms?.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};
export default Rooms;
