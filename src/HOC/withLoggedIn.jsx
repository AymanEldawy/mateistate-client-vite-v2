import PATHS from "@/data/paths";
import useGlobalOptions from "@/hook/useGlobalOptions";
import useUserLocalStorage from "@/hook/useUserLocalStorage";
import { Navigate } from "react-router-dom";

const withLoggedIn = (Component) => {
  const Wrapper = (props) => {
    const { user } = useGlobalOptions();

    // Used if the user didn't select remember me
    const { user: userDataFromSessionStorage, accessToken } =
    useUserLocalStorage();
    const isTemporaryLogin = userDataFromSessionStorage && !user;
    // const isTemporaryLogin = user || true
    if (user) {
      return <Navigate to={PATHS.HOME} />;
    } else if (isTemporaryLogin) {
      // (async () => {
      //   await dispatch(setUserData(userDataFromSessionStorage));
      //   await dispatch(setAccessToken(accessToken));
      // })();
      return <Navigate to={PATHS.HOME} />;
    }

    return <Component {...props} />;
  };

  return Wrapper;
};

export default withLoggedIn;
