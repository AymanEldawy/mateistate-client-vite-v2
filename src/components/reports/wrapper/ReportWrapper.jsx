import { useState } from 'react';
import ReportResultsWrapper from './ReportResultsWrapper';
import { FormProvider, useForm } from 'react-hook-form';
import { PaperHeader } from '../../layout/paper/PaperHeader';
import Loading from '@/components/shared/Loading';

const ReportWrapper = ({ getReportData, columns, children, extraContent, reportHeadProps, methods }) => {
  const { handleSubmit } = methods;
  const [showResult, setShowResult] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (value) => {
    console.log({value});
    try {
      setLoading(true);
      const response = await getReportData(value);
      setData(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="bg-[#fff] shadow p-4 container rounded-md !my-4 relative">
        <PaperHeader {...reportHeadProps} />
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            {children}
            <button type="submit" className="text-white bg-primary px-4 py-2 mt-4 rounded-md" disabled={loading}>
              Submit
            </button>
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