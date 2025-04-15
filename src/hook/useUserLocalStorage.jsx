import {
  MATEI_ACCESS_TOKEN,
  MATEI_LOCAL_STORAGE_USER_KEY,
} from "@/data/constants";
import Cookies from "js-cookie";

const useUserLocalStorage = () => {
  const userDataFromLocalStorage = localStorage.getItem(
    MATEI_LOCAL_STORAGE_USER_KEY
  );
  const user =
  userDataFromLocalStorage && JSON.parse(userDataFromLocalStorage);

  const accessToken = Cookies.get(MATEI_ACCESS_TOKEN);  

  return { user, accessToken };
};

export default useUserLocalStorage;
