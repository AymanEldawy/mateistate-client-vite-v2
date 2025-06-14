import QUERY_KEYS from "@/data/queryKeys";
import { useVoucherEntriesView } from "@/hook/useVoucherEntriesView";
import { getEntriesByCreatedFrom } from "@/services/entriesService";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { EyeIcon } from "../Icons";
import Btn from "./Btn";


export const ViewEntry = ({ id, created_from, hideText }) => {
  const { t } = useTranslation();
  const { dispatchVoucherEntries } = useVoucherEntriesView();

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.ENTRIES, 'CREATED_FROM', id],
    queryFn: async () => {
      const response = await getEntriesByCreatedFrom(id);
      console.log(response, '-res');

      return response || {};
    },
    enabled: !!id
  });


  console.log(data, 'entry', id);

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
          id: data?.entry?.id,
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
