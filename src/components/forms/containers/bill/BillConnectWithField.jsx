import { BILL_CONNECT_WITH_MAINTENANCES_CODE, BILL_CONNECT_WITH_MAINTENANCES_NAME, CONNECT_WITH_NOTHING_CODE } from "@/data/GENERATE_STARTING_DATA";
import { BILL_CONNECT_WITH } from "@/helpers/DEFAULT_OPTIONS";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RHFAsyncSelectField, RHFSelectField } from "../../fields";

const REF_TABLES = {
  [BILL_CONNECT_WITH_MAINTENANCES_CODE]: BILL_CONNECT_WITH_MAINTENANCES_NAME,
};

const BillConnectWithField = () => {
  const { t } = useTranslation();
  const { control, watch } = useFormContext();
  const [list, setList] = useState([]);
  const [selectedItemNumber, setSelectedItemNumber] = useState(1);
  const [viewUrl, setViewUrl] = useState(null);

  const selectName = `bill.connectWith`;
  const selectNameId = `bill.connectWithId`;

  useEffect(() => {
    async function fetchList(table) {
      // const data = await getServiceWithRequestedMaterials();
      const data = await null;
      if (data?.success) {
        const result = data?.result || []
        let uniqueList = {};
        for (const item of result) {
          uniqueList[item?.id] = {
            value: item?.id,
            label:
              table === BILL_CONNECT_WITH_MAINTENANCES_NAME?.toLocaleLowerCase()
                ? item?.number
                : item?.name,
          };
        }
        setList(Object.values(uniqueList));
      }
    }
    setSelectedItemNumber(watch(selectName));
    const refTable = REF_TABLES?.[watch(selectName)];
    if (refTable) {
      fetchList(refTable?.toLowerCase());
    }
  }, [watch(selectName)]);

  useEffect(() => {
    let connectWithId = watch(selectNameId);
    if (connectWithId) getViewUrl(connectWithId);
  }, [watch(selectNameId)]);

  const getViewUrl = async (connectWithId) => {
    // const response = await getConnectWithUrl(watch(selectName), connectWithId);
  };

  return (
    <>
      <div className={`flex flex-row items-center`}>
        <RHFSelectField
          label="connect_with"
          name={selectName}
          options={BILL_CONNECT_WITH}
        />
        {selectedItemNumber > CONNECT_WITH_NOTHING_CODE ? null : (
          <RHFSelectField
            label="connect_with_id"
            name={selectNameId}
            options={list}
          />
        )}
      </div>
    </>
  );
};

export default BillConnectWithField;
