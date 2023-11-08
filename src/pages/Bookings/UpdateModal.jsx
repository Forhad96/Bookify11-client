import { useState } from "react";
import DatePicker from "react-tailwindcss-datepicker";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
const UpdateModal = ({ bookedId }) => {
  const axios = useAxios();
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleUpdateDate = async () => {
    try {
    const res =  await axios.patch(`/rooms/${bookedId}`,value);
    console.log(res);
    if (res.data.modifiedCount > 0){
        toast.success("booking updated");
    } 

        
    } catch (error) {
      console.log(error);
      toast.error('some thing went wrong')
    }
  };

  return (
    <div>
      {/* <button type="button"></button> */}

      <label
        className="flex items-center px-2 py-1 space-x-1"
        htmlFor="modal-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4 fill-current"
        >
          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
        </svg>
        <span>update booking</span>
      </label>

      <input className="modal-state" id="modal-3" type="checkbox" />
      <div className="modal w-full">
        <label className="modal-overlay"></label>
        <div className="modal-content flex w-full h-[80vh] flex-col gap-5">
          <label
            htmlFor="modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">Update your Booking</h2>
          <div className="">
            <DatePicker value={value} onChange={handleValueChange} />
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleUpdateDate}
              className="btn btn-error btn-block"
            >
              Update
            </button>
            <button className="btn btn-block">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateModal;
