import { useTheme } from "@/hook/useTheme";
import { useEffect, useState } from "react";
import LanguageBar from './LanguageBar';
import FullScreenIcon from '../../Icons/FullScreenIcon';
import FitScreenIcon from '../../Icons/FitScreenIcon';
import ToggleThemeBar from './ToggleThemeBar';
import NotificationBar from './NotificationBar';
import UserBar from './UserBar';

export const IconsBar = ({ containerClassName }) => {
  const { changeTheme, theme } = useTheme();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const checkFullScreen = () => {
    setIsFullScreen(
      document.fullscreenElement || document.webkitFullscreenElement
    );
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", checkFullScreen);
    document.addEventListener("webkitfullscreenchange", checkFullScreen);

    return () => {
      document.removeEventListener("fullscreenchange", checkFullScreen);
      document.removeEventListener("webkitfullscreenchange", checkFullScreen);
    };
  }, []);

  const handleToggleFullScreen = () => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    } else {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };

  return (
    <div className={`flex items-center gap-2 ${containerClassName}`}>
      <button
        onClick={handleToggleFullScreen}
        className="p-2 rounded-full hover:bg-[#0002]"
      >
        {isFullScreen ? <FitScreenIcon /> : <FullScreenIcon />}
      </button>
      <LanguageBar />
      <ToggleThemeBar theme={theme} changeTheme={changeTheme} />
      <NotificationBar />
      <UserBar />
    </div>
  );
};
