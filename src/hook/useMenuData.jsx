import { getAllBills } from "@/services/billService";
import { getAllChequePatterns } from "@/services/chequePatternsService";
import { useQuery } from "@tanstack/react-query";
import { getAllContractPatterns } from '@/services/contractPatternsService';
import { getAllBillPatterns } from "@/services/billPatternsService";
import { getAllVoucherPatterns } from "@/services/voucherPatternService";
import PATHS from "@/data/paths";
import PERMISSIONS from "@/data/permissions";

export const useMenuData = () => {
  const response = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      console.log('called');
      try {
        const [cheques, bills, contracts, vouchers] = await Promise.all([
          getAllChequePatterns(),
          getAllBillPatterns(),
          getAllContractPatterns(),
          getAllVoucherPatterns(),
        ]);

        // Now you can use the results
        let menu = [];
        const chequesMenu = cheques?.data?.map((item) => {
          return {
            name: item?.name,
            path: PATHS.CHEQUE + '?code=' + item?.code,
            permissions: PERMISSIONS[PATHS.CHEQUE],
          }
        })

        const contractsMenu = contracts?.data?.map((item) => {
          return {
            name: item?.name,
            path: PATHS.CONTRACT + '?code=' + item?.code,
            permissions: PERMISSIONS[PATHS.CONTRACT],
          }
        });

        const billsMenu = bills?.data?.map((item) => {
          return {
            name: item?.name,
            path: PATHS.BILLS + '?code=' + item?.code,
            permissions: PERMISSIONS[PATHS.BILLS],
          }
        })
        const vouchersMenu = vouchers?.data?.map((item) => {
          return {
            name: item?.name,
            path: PATHS.VOUCHERS + '?code=' + item?.code,
            permissions: PERMISSIONS[PATHS.VOUCHERS],
          }
        })

        menu.push({ name: 'contracts', subChild: contractsMenu })
        menu.push({ name: 'cheques', subChild: chequesMenu })
        menu.push({ name: 'bills', subChild: billsMenu })
        menu.push({ name: 'vouchers', subChild: vouchersMenu })

        return menu;
      } catch (error) {
        console.error("Error fetching patterns:", error);
        throw error;
      }

    }
  })

  return response
};
