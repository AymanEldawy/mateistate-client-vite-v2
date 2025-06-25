import {
  getFirstOne,
  getLastOne,
  getNextOne,
  getOneBy,
  getPreviousOne,
} from "@/services/paginationService";
import { useEffect, useMemo, useState } from "react";

const useFormPagination = ({
  name,
  number,
  code,
  chequeId,
  reset,
  defaultValue,
}) => {
  const idKey = name === "user" ? "member_id" : "id";
  // console.log("useFormPagination", name, number, code, chequeId);
  const [currentNumber, setCurrentNumber] = useState();
  const [lastNumber, setLastNumber] = useState(number);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (number) {
      getPaginationTable();
      setCurrentNumber(number);
      // goLast(false, true);
    } else if (!currentNumber) {
      goLast(true);
      // goFirst();
    }
  }, [number]);

  const getPaginationTable = async (defaultNumber) => {
    const current = await getOneBy(
      name,
      number || defaultNumber,
      "number",
      code,
      chequeId
    );
    if (current?.data) {
      let data = current?.data;
      setCurrentNumber(data?.number);
      if (data?.[idKey]) {
        setCurrentId(data?.[idKey]);
      }
    } else goLast(true);
  };

  const goLast = async (isNew, ignore) => {
    const current = await getLastOne(name, code, chequeId);
    if (current?.success) {
      let data = current?.data;
      let last = +data?.number || 0;
      setLastNumber(last);
      if (isNew) {
        setCurrentNumber(last + 1);
      }
      // if (!ignore) {
      //   setCurrentNumber(last);
      //   setCurrentId(data?.[idKey]);
      // }
    }
  };

  const isFirst = useMemo(() => {
    return +currentNumber === 1;
  }, [currentNumber]);

  const isLast = useMemo(() => {
    return +currentNumber === +lastNumber;
  }, [currentNumber, lastNumber]);

  const goNew = async () => {
    if (lastNumber) {
      setCurrentNumber(+lastNumber + 1);
    } else {
      goLast(true);
    }
    reset(defaultValue);
    console.log("called reset");
  };

  const goNext = async () => {
    const current = await getNextOne(name, currentNumber, code, chequeId);
    if (current?.success) {
      let data = current?.data;
      setCurrentNumber(data?.number);
      setCurrentId(data?.[idKey]);
    }
  };

  const goBack = async () => {
    if (currentNumber === 1) return;
    const current = await getPreviousOne(name, currentNumber, code, chequeId);
    if (current?.success) {
      let data = current?.data;
      setCurrentNumber(data?.number);
      setCurrentId(data?.[idKey]);
    }
  };

  const goFirst = async () => {
    if (currentNumber === 1) return;
    const current = await getFirstOne(name, code, chequeId);
    if (current?.success) {
      let data = current?.data;
      setCurrentNumber(data?.number);
      setCurrentId(data?.[idKey]);
    }
  };

  const goTo = async (index) => {
    if (index === "FIRST") {
      goFirst();
    } else if (index === "LAST") {
      goLast();
    } else getPaginationTable(index);
  };

  return {
    goNext,
    goBack,
    isFirst,
    goTo,
    setCurrentNumber,
    currentNumber,
    goFirst,
    goLast,
    isLast,
    lastNumber,
    goNew,
    currentId,
    getPaginationTable,
  };
};

export default useFormPagination;
