import Modal from "@/components/shared/Modal";

const PaperModal = ({ children, ...props }) => {
  return (
    <Modal {...props} bodyClassName={`!p-0 !overflow-hidden w-[1200px]`}>
      {children}
    </Modal>
  );
};

export default PaperModal;
