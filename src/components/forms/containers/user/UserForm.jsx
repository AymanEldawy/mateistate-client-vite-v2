import QUERY_KEYS from "@/data/queryKeys";
import { NATIONALITY_LISTS, USER_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { getAllBanks } from "@/services/bankService";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ReportFilterBuildings } from "../../../filters/ReportFilterBuildings";
import { ReportFilterCategories } from "../../../filters/ReportFilterCategories";
import { RHFDatePicker, RHFInput, RHFSelectField } from "../../fields";
import { AccountField } from "../../global";

const UserForm = () => {
  const { watch, setValue } = useFormContext();
  const [buildingsIds, setBuildingsIds] = useState({});
  const [categoriesIds, setCategoriesIds] = useState({});

  const { data: banks } = useQuery({
    queryKey: [QUERY_KEYS.Bank],
    queryFn: async () => {
      const response = await getAllBanks();
      return response?.data || [];
    },
  })


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


  return (
    <div className="overflow-auto max-h-[500px]">
      <div className="grid grid-cols-2 gap-2">
        <RHFInput label="name" name="user.name" required />
        <RHFSelectField label="cardType" name="user.cardType" options={USER_TYPE} required />
        <RHFInput label="phone" name="user.phone" required />
        <RHFInput label="email" name="user.email" required />
        <RHFInput label="trnNumber" name="user.trnNumber" type="number" />
        <AccountField label="accountId" name="user.accountId" />

        <RHFDatePicker label="dateOfBirth" name="user.dateOfBirth" />
        <RHFInput label="passportNumber" name="user.passportNumber" />
        <RHFDatePicker label="passportExpiry" name="user.passportExpiry" />
        <RHFInput label="nationalId" name="user.nationalId" />
        <RHFDatePicker label="nationalIdExpiry" name="user.nationalIdExpiry" />
        <RHFInput label="address" name="user.address" />
        <RHFSelectField label="userType" name="user.userType" options={[]} />
        <RHFInput label="commercialRegister" name="user.commercialRegister" />
        <RHFInput label="barcode" name="user.barcode" type="number" />
        <RHFInput label="profession" name="user.profession"  type="number" />
        <RHFInput label="workPhone" name="user.workPhone" />
        <RHFInput label="token" name="user.token" />
        <RHFInput label="fax" name="user.fax" />
        <RHFInput label="mailbox" name="user.mailbox" />
        <RHFInput label="sponsor" name="user.sponsor" type="number" />
        <RHFInput label="statement" name="user.statement" />
        <AccountField label="insuranceAccountId" name="user.insuranceAccountId" />
        <RHFSelectField label="bankId" name="user.bankId" options={banks} />
        <RHFSelectField label="nationality" name="user.nationality" options={NATIONALITY_LISTS} />




      </div>
      {/* <DynamicForm
        containerClassName="mb-4 border-b pb-4"
        fields={USER_FIELDS}
        key={'user'}
        tab="user"
      /> */}
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
