import { ErrorText } from "@/components/shared/ErrorText";
import { DEFAULT_COLORS } from "@/helpers/building/buildingHelpers";
import useFlatColoring from "@/hook/useFlatColoring";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";


const ColorToolsField = ({
  containerClassName,
  inputClassName,
  error,
  availableColors,
  name,
  ...field
}) => {
  const coloring = useFlatColoring();
  const { t } = useTranslation();
  const { register, setValue, watch } = useFormContext();
  const [openColorList, setOpenColorList] = useState();
  const [color, setColor] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (color) {
      setValue(name, color);      
    }
  }, [color]);

  useEffect(() => {
    if (openColorList) return;
    if (coloring?.changeAvailableColors) {
      coloring?.changeAvailableColors(watch(name));
    }
  }, [openColorList]);

  return (
    <div className="relative">
      <div className={"flex flex-row " + containerClassName} key={field?.name}>
        <button
          aria-label="choose color"
          type="button"
          className={`border read-only:bg-[#2289fb1c] w-full h-8 dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${error ? "border-red-200 text-red-600" : ""
            } 
         `}
          style={{ backgroundColor: watch(name) }}
          onClick={() => setOpenColorList(true)}
        />
        {error ? (
          <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
        ) : null}
      </div>
      <>
        {openColorList ? (
          <div>
            <div
              open={openColorList}
              onClick={() => setOpenColorList(false)}
              className={`fixed top-0 left-0 bottom-0 right-0 z-20 ${openColorList
                ? "opacity-60 pointer-events-auto"
                : "opacity-0 pointer-events-none"
                } `}
            />
            <div className="absolute z-20 min-w-[200px] p-4 top-0 ltr:left-full rtl:right-full bg-white shadow-md rounded-md">
              <div
                className={`relative h-6 mb-4 w-6 rounded-full border flex items-center justify-center text-white text-lg overflow-hidden ${color === inputRef?.current?.value ? "shadow-md" : ""
                  }`}
                style={{ backgroundColor: inputRef?.current?.value }}
              >
                <input
                  ref={inputRef}
                  id="color"
                  type="color"
                  name="color"
                  value={watch(name)}
                  defaultValue={watch(name)}
                  onChange={(e) => setColor(e.target.value)}
                  {...register(name, {
                    required: field?.required && `${field?.name} is required`,
                  })}
                  className={`border-none outline-none bg-transparent absolute top-0 left-0 w-full h-full flex items-center justify-center`}
                />
              </div>
              <div className="grid grid-cols-5 gap-1">
                {(availableColors || DEFAULT_COLORS)?.map((currentColor) => (
                  <button
                    key={currentColor}
                    type="button"
                    className={`h-6 w-6 rounded-full border relative flex items-center justify-center ${color === currentColor ? "shadow-md" : ""
                      }`}
                    style={{ backgroundColor: currentColor }}
                    onClick={() => setColor(currentColor)}
                  >
                    {color === currentColor ? (
                      <span className="h-4 w-4 rounded-full border-[3px] border-white block" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default ColorToolsField;
