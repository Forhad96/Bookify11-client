import { Link, useNavigate } from "react-router-dom";
// import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import PropTypes from 'prop-types';

import room1 from "../../assets/room/3.png";


const Room = ({room}) => {
  // const { id, name, image, size, maxPerson, description, price } = room || {};
  const {_id,description,category,price,size,availability,images,special_offers,reviews} =room || {};
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/roomsDetails/${_id}`)}
      className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
    >
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <img className="object-cover w-full" src={room1} alt="wallpaper" />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm text-slate-400">4.9</span>
        </div>
      </div>
      <div className="mt-1 p-2">
        <h2 className="text-slate-700">{category}</h2>
        <p className="mt-1 text-sm text-slate-400">
          Availability: <span className="font-bold">{availability}</span>
        </p>
        <div className="mt-3 flex items-end justify-between">
          <p>
            <span className="text-lg font-bold text-orange-500">${price}</span>
            <span className="text-sm text-slate-400">/night</span>
          </p>
          <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

Room.propTypes ={
  room:PropTypes.object.isRequired
}
export default Room;
