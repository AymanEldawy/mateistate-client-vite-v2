import { useVoucherEntriesView } from "@/hook/useVoucherEntriesView";
import Btn from "./Btn";
import { EyeIcon } from "../Icons";
import { useTranslation } from "react-i18next";


export const ViewEntry = ({ id, created_from, hideText }) => {
  const { t } = useTranslation();
  const { dispatchVoucherEntries } = useVoucherEntriesView();

  return (
    <Btn
      type="button"
      kind="primary"
      containerClassName="!w-fit !gap-2 !px-2 whitespace-nowrap"
      // className="bg-blue-500 text-xs whitespace-nowrap text-white px-2 py-1 rounded-md flex items-center gap-2"
      onClick={() =>
        dispatchVoucherEntries({
          created_from,
          table: "entry_main_data",
          grid: "entry_grid_data",
          ref_name: "created_from_id",
          id,
        })
      }
    >
      {hideText ? null :
        t('view_entry')
      }
      <EyeIcon className="h-5 w-5" />
    </Btn>
  );
};
