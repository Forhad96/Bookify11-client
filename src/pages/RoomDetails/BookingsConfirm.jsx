import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types'
import useAxios from "../../hooks/useAxios";

const BookingsConfirm = ({ isOpen, onClose, room,date }) => {
  const {user,loading} = useAuth()
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

  const {email,displayName,photoURL}=user;
  const {startDate,endDate} = date;
  const axios = useAxios()


  if (!isOpen) {
    return null;
  }
  
const booking = {bookedId:_id,name:displayName,email,category,price,checkIn:startDate,checkOut:endDate,availability,}

const handleBookingConfirm = async ()=>{
  try{
    await axios.post('/bookings',booking)
    alert('successful')

  }catch(error){
    console.log(error);
  }

}
  return (
    <div className="bg-white w-96  rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Category</span>
        <span>Premium</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Check in</span>
        <span>$1.99</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Check out</span>
        <span>$0.00</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>$0.00</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">$21.98</span>
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

BookingsConfirm.propTypes={
  isOpen:PropTypes.func.isRequired,
  onClose:PropTypes.func.isRequired,
  room:PropTypes.object.isRequired,
  date:PropTypes.object.isRequired,
}
export default BookingsConfirm;