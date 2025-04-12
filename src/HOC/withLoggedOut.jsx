import PATHS from "@/data/paths";
import useGlobalOptions from "@/hook/useGlobalOptions";
import useUserSessionStorage from "@/hook/useUserSessionStorage";
import { Navigate } from "react-router-dom";

const withLoggedOut = (Component) => {
  const Wrapper = (props) => {

    // const { user } = useGlobalOptions()
    // const { user: userDataFromSessionStorage, accessToken } =
    //   useUserSessionStorage();

    // const isTemporaryLogin = userDataFromSessionStorage && !user;
    // // const isTemporaryLogin = user || true;

    // if (!user && !userDataFromSessionStorage) {
    //   return <Navigate to={PATHS.LOGIN} />;
    // } else if (isTemporaryLogin) {
    //   // (async () => {
    //   //   await dispatch(setUserData(userDataFromSessionStorage));
    //   //   await dispatch(setAccessToken(accessToken));
    //   // })();
    // }

    return <Component {...props} />;
  };

  return Wrapper;
};

export default withLoggedOut;
