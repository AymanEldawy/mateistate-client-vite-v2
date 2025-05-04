import { useCallback, useEffect, useMemo, useState } from "react";
import { ReportFilterBuildings } from "../../../filters/ReportFilterBuildings";
import { ReportFilterCategories } from "../../../filters/ReportFilterCategories";
import { useFormContext } from "react-hook-form";
import DynamicForm from "../../wrapper/DynamicForm";
import { USER_FIELDS } from "@/helpers/user/userFields";

const UserForm = () => {
  const { watch, setValue } = useFormContext();
  const [buildingsIds, setBuildingsIds] = useState({});
  const [categoriesIds, setCategoriesIds] = useState({});

  const update = useCallback((itemKey, list, formKey) => {
    let data = []
    for (const key in list) {
      data.push({ [itemKey]: key })
    }
    setValue(formKey, data)
  }, [])

  useMemo(() => {
    update('buildingId', buildingsIds, 'workerBuildings')
  }, [Object.keys(buildingsIds).length])

  useMemo(() => {
    update('categoryId', categoriesIds, 'workerCategories')
  }, [Object.keys(categoriesIds).length])

  // useMemo(() => {
  //   let data = []
  //   for (const categoryId in categoriesIds) {
  //     data.push({ categoryId })
  //   }
  //   setValue('workerCategories', data)
  // }, [Object.keys(categoriesIds).length])




  return (
    <div className="overflow-auto max-h-[500px]">
      <DynamicForm
        containerClassName="mb-4 border-b pb-4"
        fields={USER_FIELDS}
        key={'user'}
        tab="user"
      />
      {watch("user.card_type") > 2 ? (
        <ReportFilterBuildings
          bodyClassName={"grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6"}
          buildingsIds={buildingsIds}
          setBuildingsIds={setBuildingsIds}
        />
      ) : null}
      {watch("user.card_type") > 3 ? (
        <ReportFilterCategories
          containerClassName="mt-4"
          bodyClassName={"grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6"}
          categoriesIds={categoriesIds}
          setCategoriesIds={setCategoriesIds}
        />
      ) : null}
    </div>
  );
};

export default UserForm;
