import { useEffect, useMemo, useState } from "react";

const columns = ["id", "number"];

const useFormPagination = ({
  findAll, name, code, id, selectedItem
}) => {
  const [currentNumber, setCurrentNumber] = useState();
  const [lastNumber, setLastNumber] = useState(id);
  const [currentId, setCurrentId] = useState(null);

  // (page-1)*limit + current_order

  useEffect(() => {
    if (id) {
      // getPaginationTable();
      goLast();
    } else if (!currentNumber) {
      goLast(true);
    }
  }, [id]);

  console.log("🚀 ~ useEffect ~ selectedItem:", selectedItem)

  useEffect(() => {
    if (!selectedItem) return
    setCurrentNumber(selectedItem?.number)
    setLastNumber(selectedItem?.page)
    setCurrentId(selectedItem?.id)
  }, [selectedItem])

  const getPaginationTable = async () => {
    // const current = await findOne(id);
    // if (current?.success) {
    //   let data = current?.data;
    //   setCurrentNumber(data?.pages);
    //   setLastNumber(data?.total);
    //   if (data?.id) {
    //     setCurrentId(data?.id);
    //   }
    // }
  };

  const goLast = async (isNew) => {
    const current = await findAll(1);
    if (current?.success) {
      let data = current?.data;
      let last = +data?.total || 0;
      setLastNumber(last);
      if (isNew) {
        setCurrentNumber(last + 1);
      } else {
        setCurrentId(data?.id);
      }
    }
  };


  const isFirst = useMemo(() => {
    return currentNumber === 1;
  }, [currentNumber]);

  const isLast = useMemo(() => {
    return currentNumber === lastNumber;
  }, [currentNumber, lastNumber]);

  const goNew = async () => {
    if (lastNumber) {
      setCurrentNumber(+lastNumber + 1);
    } else {
      goLast(true);
    }
  };

  const goNext = async () => {
    const current = await findAll(name, currentNumber, columns, code);
    if (current?.success) {
      setCurrentNumber(current?.pages);
      setCurrentId(current?.data?.at(0)?.id);
    }
  };

  const goBack = async () => {
    if (currentNumber === 1) return;
    const current = await findAll(name, currentNumber, columns, code);
    if (current?.success) {
      setCurrentNumber(current?.pages);
      setCurrentId(current?.data?.at(0)?.id);
    }
  };

  const goFirst = async () => {
    if (currentNumber === 1) return;
    const current = await findAll(name, columns, code);
    if (current?.success) {
      setCurrentNumber(current?.pages);
      setCurrentId(current?.data?.at(0)?.id);
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
    getPaginationTable
  };
};

export default useFormPagination;
