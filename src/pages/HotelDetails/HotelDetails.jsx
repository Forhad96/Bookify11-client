import { useParams } from "react-router-dom";
import useGetPublicData from "../../hooks/PublicApi/useGetPublicData";
import Loading from "../Shared/Loading/Loading";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const HotelDetails = () => {
    const {id} = useParams()
    const {data,isLoading} = useGetPublicData(`hotels/${id}`,'hotel')
    if(isLoading){
      return <Loading></Loading>
    }
    
const {
  hotelName,
  hotelImage,
  description,
  rating,
  address,
  contact,
  amenities,
} = data;
    return (
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={hotelName}></SectionTitle>
        <div className="relative">
          <img
            src={hotelImage}
            alt={`${hotelName} Image`}
            className="w-full h-[380px] object-fill mb-4 rounded-md"
          />
          <div className="absolute  inset-32 h-full  text-white  bg-black/40 p-6 rounded-md shadow-md my-8">
            <p className=" mb-4">{description}</p>
            <div className="mb-4">
              <strong>Rating:</strong> {rating}
            </div>
            <div className="mb-4">
              <strong>Address:</strong> {address}
            </div>
            <div className="mb-4">
              <strong>Contact:</strong> {contact}
            </div>
            <div>
              <strong>Amenities:</strong>
              <ul className="list-disc pl-6">
                {amenities.map((amenity, index) => (
                  <li key={index} className="">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* hotel rooms */}
      </div>
    );
};
export default HotelDetails;