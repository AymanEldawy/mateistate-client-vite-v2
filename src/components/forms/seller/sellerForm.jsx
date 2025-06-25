import { RHFInput, RHFInputAmount } from "../fields";

const SellerForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="name" label="name" required />
        <RHFInput name="ltnname" label="ltnname" />
        <RHFInput name="id_card" label="id_card" />
        <RHFInput name="passport" label="passport" type="number" />
        <RHFInput name="workCardNumber" label="work_card_number" />
        <RHFInput name="mobile" label="mobile" />
        <RHFInput name="cellPhone" label="cellPhone" />
        <RHFInput name="mailbox" label="mailbox" />
        <RHFInput name="email" label="email" type="email" required />
        <RHFInput name="address" label="address" />
        <RHFInputAmount name="minimumCommission" label="minimumCommission" required />
        <RHFInputAmount name="maximumDiscount" label="maximumDiscount" required />
        <RHFInput name="statement" label="statement" />
      </div>
    </div>
  );
};

export default SellerForm;
