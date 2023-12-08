import axios from "axios";
const xiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useXiosPublic = () => {
  return xiosPublic
};
export default useXiosPublic;
