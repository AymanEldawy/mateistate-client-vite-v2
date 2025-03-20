import { BASE_URL } from "@/data/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const useFetchData = (keys, url) => {
  return useQuery({
    queryKey:keys, 
    queryFn: () => fetchData(`${BASE_URL + url}`)
  });
};

export default useFetchData;
