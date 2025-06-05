import QUERY_KEYS from "@/data/queryKeys";
import { getAllStores } from "@/services/storeService";
import { useQuery } from "@tanstack/react-query";
import { RHFInput, RHFSelectField } from "../../fields";

const StoreForm = () => {

  const { data: stores } = useQuery({
    queryKey: [QUERY_KEYS.STORE],
    queryFn: async () => {
      const response = await getAllStores();
      return response?.data || [];
    },
  });


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <RHFInput name="code" label="code" type="number" required />
      <RHFInput name="name" label="name" required />
      <RHFInput name="ltnname" label="ltnname" />
      <RHFInput name="address" label="address" />
      <RHFInput name="warehouseman" label="warehouseman" />
      <RHFInput name="note" />
      <RHFInput name="type" label="type" type="number" />
      <RHFSelectField name="parentId" label="parentId" options={stores} />
      <RHFSelectField name="finalId" label="finalId" options={stores} />
    </div>
  );
};

export default StoreForm;
