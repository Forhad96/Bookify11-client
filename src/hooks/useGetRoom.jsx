import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetRoom = ({id}) => {
    const axios = useAxios()
    const { data:room } = useQuery({
      queryKey: ["room"],
      queryFn: async () => {
        const { data } = await axios.get(`/rooms/${id}`);
        return data;
      },
    });
    return room
};
export default useGetRoom;