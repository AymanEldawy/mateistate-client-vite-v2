import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterCard } from "./ReportFilterCard";

export const ReportReviewField = ({ containerClassName }) => {
  return (
    <ReportFilterCard
      title="Review"
      containerClassName={containerClassName}
    >
      <RHFCheckbox
        {...{
          label: "reviewed_presentation",
          name: "reviewed",
        }}
        containerClassName="flex items-center gap-2"
        labelClassName="mt-2"
      />
      <RHFCheckbox
        {...{
          label: "unreviewed_presentation",
          name: "unreviewed",
        }}
      />
    </ReportFilterCard>
  );
};
