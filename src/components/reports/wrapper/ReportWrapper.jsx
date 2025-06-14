import { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import PaperHeader from '../../layout/paper/PaperHeader';
import ReportResultsWrapper from './ReportResultsWrapper';

const ReportWrapper = ({ getReportData, columns, children, extraContent, reportHeadProps, methods }) => {
  const { handleSubmit } = methods;
  const [showResult, setShowResult] = useState();
  const [data, setData] = useState();

  const onSubmit = async (value) => {
    const response = await getReportData(value);
    setData(response)
  };

  return (
    <>
      <div className="bg-[#fff] shadow p-4 container rounded-md !my-4 relative">
        <PaperHeader {...reportHeadProps} />
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            {children}
          </form>
          {extraContent}
        </FormProvider>
      </div>
      <ReportResultsWrapper
        data={data}
        columns={columns} // report columns
        open={showResult}
        onClose={() => setShowResult(false)}
      />
    </>
  )
}

export default ReportWrapper