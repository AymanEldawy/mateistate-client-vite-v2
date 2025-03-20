import { MoonIcon, SunIcon } from "@/components/Icons";

const ToggleThemeBar = ({ theme, changeTheme }) => {
  return (
    <button
      onClick={changeTheme}
      className="p-2 rounded-full hover:bg-[#0002]"
    >
      {theme !== "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ToggleThemeBar;
