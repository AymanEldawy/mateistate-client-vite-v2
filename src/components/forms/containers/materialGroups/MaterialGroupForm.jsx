import QUERY_KEYS from "@/data/queryKeys";
import { getAllMaterialGroups } from "@/services/materialGroupsService";
import { useQuery } from "@tanstack/react-query";
import { RHFInput, RHFSelectField } from "../../fields";

const MaterialGroupForm = () => {

  const { data: materialGroups } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORY],
    queryFn: async () => {
      const response = await getAllMaterialGroups();
      return response?.data || [];
    },
  })

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput label="code" name="code" type="number" />
        <RHFInput label="name" name="name" required />
        <RHFInput label="ltnname" name="ltnname" />
        <RHFInput label="note" name="note" />
        <RHFSelectField label="parentId" name="parentId" options={materialGroups} />
      </div>
    </div>
  );
};

export default MaterialGroupForm;
