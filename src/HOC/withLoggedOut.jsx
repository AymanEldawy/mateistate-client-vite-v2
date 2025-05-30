import PATHS from "@/data/paths";
import useGlobalOptions from "@/hook/useGlobalOptions";
import useUserLocalStorage from "@/hook/useUserLocalStorage";
import { Navigate } from "react-router-dom";

const withLoggedOut = (Component) => {
  const Wrapper = (props) => {

    const { user } = useGlobalOptions()
    const { user: userDataFromSessionStorage, accessToken } =
      useUserLocalStorage();

    const isTemporaryLogin = userDataFromSessionStorage && !user;
    // const isTemporaryLogin = user || true;
    if (!user && !userDataFromSessionStorage) {
      return <Navigate to={PATHS.LOGIN} />;
    } else if (isTemporaryLogin) {
      // (async () => {
      //   await dispatch(setUserData(userDataFromSessionStorage));
      //   await dispatch(setAccessToken(accessToken));
      // })();
    }

    return <Component {...props} />;
  };

  return Wrapper;
};

export default withLoggedOut;
