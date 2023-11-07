const BookingsConfirm = ({isOpen, onClose}) => {
    if(!isOpen){
        return null
    }
    return (
      <div className="bg-white w-96  rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$19.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Taxes</span>
          <span>$1.99</span>
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
        <button className="btn btn-solid-primary" onClick={onClose}>Cancel</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
          Checkout
        </button>
      </div>
    );
};
export default BookingsConfirm;