import { Suspense } from "react";

const FormSingularLayout = ({ RenderForm, paginationForm, ...props }) => {
  return (
    <div className="p-4 w-full">
      <Suspense fallback={<p>loading....</p>}>
        <RenderForm {...paginationForm} {...props} />
      </Suspense>
    </div>
  );
};

export default FormSingularLayout;
