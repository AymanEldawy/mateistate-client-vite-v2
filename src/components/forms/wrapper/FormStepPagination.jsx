import { ChevronIcon, DoubleArrowIcon, PlusIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";

const BtnPagination = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="bg-light-green h-7 w-7 text-gray-100 disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:!text-gray-700 disabled:opacity-90   rounded-md shadow flex items-center justify-center p-[2px]"
      {...props}
    >
      {children}
    </button>
  );
};


const FormStepPagination = (props) => {
  const {
    goTo,
    goBack,
    goNext,
    lastNumber,
    setCurrentNumber,
    currentNumber,
    isLast,
    goNew,
  } = props || {};
  const handleChange = (e) => {
    // Allow only numeric input
    setCurrentNumber(e.target.value.replace(/[^0-9]/g, ""));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { // Enter key
      e.preventDefault(); // Prevent form submission
      goTo(+e.target.value); // Call `goTo` function with the numeric value
    }
  };

  return (

    <div className="flex flex-nowrap w-fit items-center justify-center gap-1 dark:bg-[#f1f1f121] dark:text-white">
      <BtnPagination
        disabled={+currentNumber === 1}
        onClick={() => goTo("FIRST")}
      >
        <DoubleArrowIcon className="ltr:rotate-180 w-5 h-5 text-inherit" />
      </BtnPagination>
      <BtnPagination
        disabled={+currentNumber === 1}
        onClick={goBack}
      >
        <ChevronIcon className="rtl:-rotate-90 ltr:rotate-90 w-5 h-5 text-inherit" />
      </BtnPagination>
      <span className="min-w-[40px] flex gap-1 text-center font-medium text-lg bg-gray-200 px-1">
        <input
          type="number"
          className="p-[2px] rounded h-[28px] text-center w-fit max-w-[56px] text-sm bg-gray-200"
          value={currentNumber}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        /
        {lastNumber}
      </span>
      <BtnPagination
        disabled={isLast}
        onClick={goNext}
      >
        <ChevronIcon className="rtl:rotate-90 ltr:-rotate-90 w-5 h-5 text-inherit" />
      </BtnPagination>
      <BtnPagination
        disabled={isLast}
        onClick={() => goTo("LAST")}
      >
        <DoubleArrowIcon className="rtl:rotate-180 w-5 h-5 text-inherit" />
      </BtnPagination>
      {currentNumber > lastNumber ? (
        <span className="text-blue-500 border mx-4 border-blue-500 bg-blue-50 rounded p-1 text-sm">
          New
        </span>
      ) : (
        <Btn type="button" onClick={goNew} containerClassName="mx-4" >
          <PlusIcon className="w-5 h-5" />
          Add new
        </Btn>
      )}
    </div>
  );
};

export default FormStepPagination