import { Seller_FIELDS } from "@/helpers/seller/sellerFields";
import { RHFInput, RHFInputAmount } from "../fields";

const SellerForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="name" label="name" required />
        <RHFInput name="ltnname" label="ltnname" />
        <RHFInput name="id_card" label="id_card" />
      </div>
      {/* <RHFDatePicker {...Lessor_FIELDS?.passport_expiry_date} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="passport" label="passport" />
        <RHFInput name="work_card_number" label="work_card_number" />
        <RHFInput name="mobile" label="mobile" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="cellPhone" label="cellPhone" />
        <RHFInput name="mailbox" label="mailbox" />
        <RHFInput name="email" label="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="address" label="address" />
        <RHFInputAmount name="minimumCommission" label="minimumCommission" required />
        <RHFInputAmount name="maximumDiscount" label="maximumDiscount" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="statement" label="statement" />
      </div>
    </div>
  );
};

export default SellerForm;
