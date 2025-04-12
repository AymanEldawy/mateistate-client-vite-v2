import {
  SESSION_STORAGE_USER_ACCESS_TOKEN_KEY,
  SESSION_STORAGE_USER_KEY,
} from "@/data/constants";

const useUserSessionStorage = () => {
  const userDataFromSessionStorage = sessionStorage.getItem(
    SESSION_STORAGE_USER_KEY
  );
  const user =
    userDataFromSessionStorage && JSON.parse(userDataFromSessionStorage);

  const accessToken = sessionStorage.getItem(
    SESSION_STORAGE_USER_ACCESS_TOKEN_KEY
  );

  return { user, accessToken };
};

export default useUserSessionStorage;
