import { Seller_FIELDS } from "@/helpers/seller/sellerFields";
import { RHFInput } from "../fields";

const SellerForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Seller_FIELDS?.name} />
        <RHFInput {...Seller_FIELDS?.ltnname} />
        <RHFInput {...Seller_FIELDS?.id_card} />
      </div>
      {/* <RHFDatePicker {...Lessor_FIELDS?.passport_expiry_date} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Seller_FIELDS?.passport} />
        <RHFInput {...Seller_FIELDS?.work_card_number} />
        <RHFInput {...Seller_FIELDS?.mobile} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Seller_FIELDS?.cellPhone} />
        <RHFInput {...Seller_FIELDS?.mailbox} />
        <RHFInput {...Seller_FIELDS?.email} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Seller_FIELDS?.address} />
        <RHFInput {...Seller_FIELDS?.minimum_commission} />
        <RHFInput {...Seller_FIELDS?.maximum_discount} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Seller_FIELDS?.statement} />
      </div>
    </div>
  );
};

export default SellerForm;
