import { getFirstPartial, getLastPartial, getNextPartial, getPartialBy, getPreviousPartial } from "@/services/opPartialCollectionService";

const usePartialPagination = (chequeId) => {

  const getNext = async (value) => {
    const response = await getNextPartial(chequeId, value)
    return response;
  };

  const getPrevious = async (value) => {
    const response = await getPreviousPartial(chequeId, value)
    return response;
  };

  const getPartialByNumber = async (value, ) => {
    const response = await getPartialBy(chequeId, value)
    return response;
  };

  const getFirst = async () => {
    const response = await getFirstPartial(chequeId)
    return response;
  };

  const getLast = async () => {
    const response = await getLastPartial(chequeId)
    return response;
  };

  return {
    getNext,
    getPrevious,
    getFirst,
    getLast,
    getPartialByNumber,
  };
};

export default usePartialPagination;
