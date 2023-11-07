import useAxios from "../../hooks/useAxios";
import Loading from "../Shared/Loading/Loading";
import Booking from "./Booking";
import {useQuery} from '@tanstack/react-query'

const Bookings = () => {
  const axios = useAxios()
  const {data:bookedRooms,isLoading} = useQuery({
    queryKey:['bookings'],
    queryFn:async()=>{
      const {data} =await axios.get('/bookings');
      return data

    }
  })
  if(isLoading){
    return <Loading></Loading>
  }
  console.log(bookedRooms);
    return (
      <div className="flex flex-col mx-auto max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-300">
          {
            bookedRooms?.map(bookedRoom=><Booking key={bookedRoom._id} bookedRoom={bookedRoom}></Booking>)
          }
          <Booking></Booking>
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm text-gray-600">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md border-blue-600"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md bg-blue-600 text-gray-50 border-blue-600"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    );
};
export default Bookings;