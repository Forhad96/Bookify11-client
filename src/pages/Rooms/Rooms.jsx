import Room from "./Room";
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios'
import Loading from '../Shared/Loading/Loading';
const Rooms = () => {
  const axios = useAxios()
const {data:rooms,isLoading}= useQuery({
  queryKey:["rooms"],
  queryFn: async ()=>{
    const {data} = await axios.get('/rooms')
    return data
  }
})
  if(isLoading){
    return <Loading></Loading>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {
        rooms?.map(room => <Room key={room?._id} room={room}></Room>)
      }

    </div>
  );
};
export default Rooms;
