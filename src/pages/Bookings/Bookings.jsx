import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Loading from "../Shared/Loading/Loading";
import Booking from "./Booking";
import {useQuery} from '@tanstack/react-query'
import { Helmet } from "react-helmet";

const Bookings = () => {
  const {user} = useAuth()
  const axios = useAxios()
  const {data:bookedRooms,isLoading,refetch} = useQuery({
    queryKey:['bookings'],
    queryFn:async()=>{
      const {data} =await axios.get(`/bookings/?email=${user?.email}`);
      return data

    }
  })
  if(isLoading){
    return <Loading></Loading>
  }

    return (
      <div className="flex flex-col mt-10 mx-auto max-w-3xl p-6 space-y-4 h-screen overflow-scroll sm:p-10 bg-gray-50 text-gray-800">
        <Helmet>
          <title>Bookings</title>
        </Helmet>
        <h2 className="text-xl font-semibold">Your bookings</h2>
        <ul className="flex flex-col divide-y divide-gray-300">
          {bookedRooms?.map((bookedRoom) => (
            <Booking
              
              refetch={refetch}
              key={bookedRoom._id}
              bookedRoom={bookedRoom}
            ></Booking>
          ))}
        </ul>
        {/* <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm text-gray-600">
           including taxes
          </p>
        </div> */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/"
            type="button"
            className="px-6 py-2 border rounded-md border-blue-600"
          >
            Back
            <span className="sr-only sm:not-sr-only">to Home</span>
          </Link>
          {/* <button
            type="button"
            className="px-6 py-2 border rounded-md bg-blue-600 text-gray-50 border-blue-600"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button> */}
        </div>
      </div>
    );
};
export default Bookings;