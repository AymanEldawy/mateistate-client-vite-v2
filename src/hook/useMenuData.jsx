import { getAllBills } from "@/services/billService";
import { getAllChequePatterns } from "@/services/chequePatternsService";
import { useQuery } from "@tanstack/react-query";
import { getAllContractPatterns } from '@/services/contractPatternsService';
import { getAllBillPatterns } from "@/services/billPatternsService";
import { getAllVoucherPatterns } from "@/services/voucherPatternService";

export const useMenuData = () => {
  useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      console.log('called');
      

      try {
        const [cheques, bill, contract, vouchers] = await Promise.all([
          getAllChequePatterns(),
          getAllBillPatterns(),
          getAllContractPatterns(),
          getAllVoucherPatterns(),
        ]);
        
        // Now you can use the results
        console.log(cheques, bill, contract, vouchers);
        console.log({
          cheques,
          bill,
          contract,
          vouchers,
        });
        
        return { cheques, bill, contract, vouchers };
      } catch (error) {
        console.error("Error fetching patterns:", error);
        throw error;
      }


    }
  })


  return {

  };
};
