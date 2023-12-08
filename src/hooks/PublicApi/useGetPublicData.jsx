import { useQuery } from "@tanstack/react-query";
import useXiosPublic from "./useXiosPublic";

const useGetPublicData = ( endPoint, key ) => {
    const xiosPublic = useXiosPublic();

const response = useQuery({
  queryKey: [key],
  queryFn: async () => {
    const res = await xiosPublic.get(endPoint);
    return res.data;
  },
});
  return response;
};
export default useGetPublicData;
