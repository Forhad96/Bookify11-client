import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";

const Booking = ({ bookedRoom, refetch }) => {
  const { _id, checkIn, checkOut } = bookedRoom;
  const axios = useAxios();

  const currentDate = new Date().getTime();
  const bookingDate = new Date(checkIn).getTime();
  let remainingTime = bookingDate - currentDate;
  let remainingDay = remainingTime / (1000 * 3600 * 24);
  const handleBookingDelete = async (id, checkIn) => {

    if (remainingDay >= 1) {
      try {
        const res = await axios.delete(`/bookings/${id}`);
        if (res.data.deletedCount > 0) {
          alert("delete successful");
          refetch()
        }
      } catch (error) {
        console.log(error);
      }
      alert("You can cancel your booking.");
    } else {
      console.log("Cancellation period has ended.");
    }
  };

// const handBookingUpdate =(id)=>{
//   console.log('update');
// }

  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leadi sm:pr-8">
                {bookedRoom?.category}
              </h3>
              <p className="text-sm text-gray-600">Check in</p>
              <p className="text-sm text-gray-600">Check out</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">${bookedRoom?.price}</p>
              <p className="text-sm line-through text-gray-400">
                {bookedRoom?.checkIn}
              </p>
              <p className="text-sm line-through text-gray-400">
                {bookedRoom?.checkOut}
              </p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              onClick={() => handleBookingDelete(_id, checkIn)}
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              {/* <img src="" alt="" /> */}
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
              </svg>
              <span>Add a review</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
              </svg>
              <span>update booking</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
Booking.propTypes = {
  bookedRoom: PropTypes.object.isRequired,
};
export default Booking;
