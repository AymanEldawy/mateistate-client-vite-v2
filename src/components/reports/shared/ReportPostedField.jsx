import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterCard } from "./ReportFilterCard";

export const ReportPostedField = ({ containerClassName }) => {
  return (
    <ReportFilterCard title="Posting" containerClassName={containerClassName}>
      <RHFCheckbox
        {...{
          label: "view posted entry",
          name: "posted",
        }}
        containerClassName="flex items-center gap-2"
        labelClassName="mt-2"
      />
      <RHFCheckbox
        {...{
          label: "view non-posted entry",
          name: "non_posted",
        }}
      />
    </ReportFilterCard>
  );
};
