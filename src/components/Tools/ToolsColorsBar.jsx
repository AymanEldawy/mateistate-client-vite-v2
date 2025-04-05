import useFlatColoring from "@/hook/useFlatColoring";
import { LockIcon } from "../Icons";

export const ToolsColorsBar = () => {
  const { onPreventColor, canInsertColor } = useFlatColoring();

  return (
    <div className="flex bg-white dark:bg-dark-border shadow-sm rounded overflow-hidden">
      <button
        onClick={onPreventColor}
        className={`px-4 py-1 bg-green-500 rounded-sm text-white  ${
          !canInsertColor ? " bg-red-500 " : ""
        }`}
      >
        <LockIcon open={canInsertColor} className="h-5 w-5" />
      </button>
    </div>
  );
};
