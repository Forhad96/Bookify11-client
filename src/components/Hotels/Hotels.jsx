import { useQuery } from "@tanstack/react-query";
import useGetPublicData from "../../hooks/PublicApi/useGetPublicData";
import SectionTitle from "../SectionTitle/SectionTitle";
import useXiosPublic from "../../hooks/PublicApi/useXiosPublic";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import Loading from "../../pages/Shared/Loading/Loading";

const Hotels = () => {
const goTo = useNavigate()
const {data:hotels,isLoading} = useGetPublicData('/hotels','hotels')
console.log(hotels);

if(isLoading){
  return <Loading></Loading>
}
const handleHotelDetails =(id)=>{
goTo(`/hotelDetails/${id}`)
}

    const hotelsData = [
      {
        imageUrl:
          "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkTo: "/rooms",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/6032424/pexels-photo-6032424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkTo: "/rooms",
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkTo: "/rooms",
      },
      // Add more hotel data as needed
    ];
    return (
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Recommended Hotels" subtitle='Bookify'></SectionTitle>
        {/* component */}
        <div className="grid gap-6 grid-cols-3 ">
          {hotels?.map((hotel, idx) => (
            <div
            onClick={()=>handleHotelDetails(hotel._id)}
              key={idx}
              className="overflow-hidden   bg-teal-400 cursor-pointer rounded-xl relative group"
            >
              <div className="rounded-xl z-50 opacity-0 bg-black/50 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                  <div className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div className="font-bold">{hotel?.hotelName}</div>
                    <div className="opacity-80 text-sm ">
                      {hotel?.description}
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt=""
                className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={hotel?.hotelImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
};
export default Hotels;