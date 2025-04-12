import { Outlet } from "react-router-dom";
import withLoggedIn from "@/HOC/withLoggedIn";
import CopyRight from "@/components/differentPagesComponents/CopyRight";
import wallpaper from "@/assets/wallpaper.jpg";
import logo from "@/assets/Mati-Estate-Logo-Animaitona02.gif";

const SignPagesLayout = () => {
  return (
    <>
      <div
        className=" h-screen w-screen bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="h-full w-full backdrop-blur-sm absolute bg-[#00000099]"></div>
        <div className="h-[60%] w-[50%] bg-blue-600 opacity-70 flex items-center justify-center rounded-b-3xl absolute z-10 top-0 left-1/2 -translate-x-1/2">
        </div>
        <div className="w-full h-full relative z-20 pt-44">
          <div className="max-w-md mx-auto relative shadow bg-white p-8 rounded-md z-20 flex flex-col gap-2">
            <img src={logo} alt="logo" className="w-64 object-contain mb-4 mx-auto" />
            <Outlet />
          </div>
        </div>
      </div>

      <footer className="sign-pages-footer">
        <CopyRight className="sign-copyright" />
      </footer>
    </>
  );
};

export default withLoggedIn(SignPagesLayout);
