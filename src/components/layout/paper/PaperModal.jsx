import Modal from '@/components/shared/Modal'

const PaperModal = ({ children, ...props }) => {
  return (
    <Modal {...props} bodyClassName={`!p-0 !overflow-hidden`}>
      {children}
    </Modal>
  )
}

export default PaperModal