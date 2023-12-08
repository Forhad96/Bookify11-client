import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BookingsConfirm = ({ isOpen, onClose, room, dateObj }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
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
  } = room;

  const { email, displayName, photoURL } = user;
  const { startDate, endDate } = dateObj;
  const axios = useAxios();

  if (!isOpen) {
    return null;
  }

  const booking = {
    bookedId: _id,
    name: displayName,
    email,
    category,
    images,
    price,
    checkIn: startDate,
    checkOut: endDate,
    availability,
  };

  const handleBookingConfirm = async () => {
    try {
      if (availability > 0) {
        const { data } = await axios.post("/bookings", booking);

        if (data.acknowledged) {
          let newAvailability = availability - 1;
          await axios.patch(
            `/rooms/${_id}/?availability=${newAvailability}`,
            dateObj
          );
          toast.success("Booking confirmed");
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // count date for calculate price

  const checkIn = new Date(startDate);
  const checkOut = new Date(endDate);

  const timeDifference = checkOut.getTime() - checkIn.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  const roundedDay = Math.round(daysDifference);

  return (
    <div className="bg-white w-96  rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Category</span>
        <span>Premium</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Check in</span>
        <span>{dateObj.startDate}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Check out</span>
        <span>{dateObj.endDate}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Size</span>
        <span>{size}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Price</span>
        <span>
          {price} x {roundedDay}
        </span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">${price * roundedDay}</span>
      </div>
      <button
        onClick={handleBookingConfirm}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
      >
        Checkout
      </button>
      <button className="btn btn-solid-primary w-full mt-4" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

BookingsConfirm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  room: PropTypes.object.isRequired,
  dateObj: PropTypes.object.isRequired,
};
export default BookingsConfirm;
              {
                isOpenModal && (
                  <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 transition duration-300">
                    <BookingsConfirm
                      isOpen={isOpenModal}
                      onClose={closeModal}
                      room={room}
                      dateObj={dateObj}
                    ></BookingsConfirm>
                  </div>
                );
              }