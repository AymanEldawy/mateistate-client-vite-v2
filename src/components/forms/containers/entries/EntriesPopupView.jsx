import { CloseIcon, NotAllowIcon } from '@/components/Icons';
import Modal from '@/components/shared/Modal';
import QUERY_KEYS from '@/data/queryKeys';
import { useVoucherEntriesView } from '@/hook/useVoucherEntriesView';
import Entries from '@/pages/views/Entries/Entries';
import { getSingleEntry } from '@/services/entriesService';
import { useQuery } from '@tanstack/react-query';

const EntriesPopupView = () => {
  console.log('called here entry');
  
  const { voucherInfo, setVoucherInfo } = useVoucherEntriesView();
  const { isLoading, data: entry } = useQuery({
    queryKey: [QUERY_KEYS.ENTRIES, voucherInfo?.id],
    queryFn: async () => {
      const response = await getSingleEntry(voucherInfo?.id);
      return response;
    },
    enabled: !!voucherInfo?.id
  });

  console.log(entry, voucherInfo, 'entry in EntriesPopupView');
  if (!voucherInfo?.id) return;

  

  return (
    <Modal
      open={true}
      onClose={() => setVoucherInfo({})}
      containerClassName="z-[102]"
      bodyClassName="!p-0"
    >
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <>
          {entry ? (
            <Entries
              formOnly
              outerClose={() => setVoucherInfo({})}
              popupFormConfig={{
                oldValues: entry
              }}
              defaultNumber={entry?.entry?.number}
            />
          ) : (
            <div className="flex flex-col text-xl text-red-500 h-full p-4">
              <button
                onClick={() => setVoucherInfo({})}
                className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500 ltr:ml-auto rtl:mr-auto"
              >
                <CloseIcon className="w-6 h-6" />
              </button>{" "}
              <div className="flex flex-col items-center justify-center">
                <NotAllowIcon className="w-12 h-12" />
                There is no Entry
              </div>
            </div>
          )}
        </>
      )}
    </Modal>
  )
}

export default EntriesPopupView