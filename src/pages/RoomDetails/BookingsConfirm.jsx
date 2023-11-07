import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types'

const BookingsConfirm = ({ isOpen, onClose, room,date }) => {
  const {user,loading} = useAuth()
  if (!isOpen) {
    return null;
  }

const handleBookingConfirm =()=>{

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