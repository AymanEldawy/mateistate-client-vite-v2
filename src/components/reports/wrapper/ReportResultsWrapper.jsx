import Modal from '../../shared/Modal'
import ReportResultsHead from './ReportResultsHead'
import ReportResultsFooter from './ReportResultsFooter'
import ReportResultTable from './ReportResultTable'

const ReportResultsWrapper = ({
  open,
  onClose,
  containerClassName,
  data,
  columns,
  loading,
  extraContentBar
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      containerClassName={containerClassName}
    >
      <ReportResultsHead extraContentBar={extraContentBar} />
      <ReportResultTable data={data} columns={columns} loading={loading} />
      <ReportResultsFooter />
      <div>ReportResultsWrapper</div>
    </Modal>
  )
}

export default ReportResultsWrapper