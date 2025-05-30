import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFSelectField, RHFTextarea } from '../../fields';
import { useFormContext } from 'react-hook-form';
import { getAllMaterialGroups } from '@/services/materialGroupsService';
import { getAllCategories } from '@/services/categoryService';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/data/queryKeys';

const MaterialsGeneral = () => {
  const { watch } = useFormContext();
  
  const { data: materialGroups } = useQuery({
    queryKey: [QUERY_KEYS.MATERIAL_GROUP],
    queryFn: async () => {
      const response = await getAllMaterialGroups();
      return response?.data || [];
    },
  });

  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORY],
    queryFn: async () => {
      const response = await getAllCategories();
      return response?.data || [];
    },
  });


  const readOnly1 = watch("material.defaults2") || watch("material.defaults3");
  const readOnly2 = watch("material.defaults1") || watch("material.defaults3");
  const readOnly3 = watch("material.defaults1") || watch("material.defaults2");

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-x-5 gap-2">
        <RHFInput name="material.code" label="code" type="number" required />
        <RHFInput name="material.name" label="name" required />
        <RHFInput name="material.ltnname" label="ltnname" />
        <RHFSelectField
          name="material.materialGroupId"
          label="materialGroupId"
          required
          options={materialGroups}

        />
        <RHFSelectField
          name="material.materialType"
          label="materialType"
          required
          options={
            [
              { id: 1, name: "Stored" },
              { id: 2, name: "Services" },
            ]
          }
        />
        <RHFSelectField
          name="material.categoryId"
          label="categoryId"
          options={categories}
        />
      </div>
      <div className="bg-gray-100 grid grid-cols-2 gap-x-5 gap-2 p-2">
        <RHFInput
          name="material.unit1"
          label="unit1"
          readOnly={readOnly1}
          labelClassName={"w-[90px]"}
        />
        <RHFCheckbox
          name="material.defaults1"
          label="defaults1"
          defaultChecked={watch('defaults1')}
          values={watch()}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly1}
        />
        <RHFInput
          name="material.barcode1"
          label="barcode1"
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly1}
        />
      </div>
      <div className="bg-gray-100 grid grid-cols-2 gap-x-5 gap-2 p-2">
        <RHFInput
          name="material.unit2"
          label="unit2"
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly2}
        />
        <RHFCheckbox
          name="material.defaults2"
          label="defaults2"
          defaultChecked={watch('defaults2')}
          values={watch()}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly2}
        />
        <RHFInput
          name="material.exchange2"
          label="exchange2"
          type="number"
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly2}
        />
        <RHFInput
          name="material.barcode2"
          label="barcode2"
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly2}
        />
      </div>
      <div className="bg-gray-100 grid grid-cols-2 gap-x-5 gap-2 p-2">
        <RHFInput
          name="material.unit3"
          label="unit3"
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly3}
        />
        <RHFCheckbox
          name="material.defaults3"
          label="defaults3"
          defaultChecked={watch('defaults3')}
          values={watch()}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly3}
        />
        <RHFInput
          name="material.exchange3"
          label="exchange3"
          type="number"
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly3}
        />
        <RHFInput
          name="material.barcode3"
          label="barcode3"
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly3}
        />
      </div>
      <RHFTextarea
        name="material.note"
        label="note"
        containerClassName=""
      />
    </div>
  );
}

export default MaterialsGeneral