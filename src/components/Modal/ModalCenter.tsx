import { Button, Modal } from "react-bootstrap";
import { ModalType } from "../../Types/interface";
import "./ModalCenter.css";

interface ModalCenterProps {
  show: boolean;
  onHide: () => void;
  type: ModalType;
  message: string;
}

const ModalCenter = (ModalCenterProps: ModalCenterProps) => {
  return (
    <Modal
      {...ModalCenterProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        className={`text-center ${
          ModalCenterProps.type === "error"
            ? `Modal-body--error`
            : `Modal-body--ok`
        }`}
      >
        {ModalCenterProps.message}
      </Modal.Body>
      <Modal.Footer
        className={`justify-content-center ${
          ModalCenterProps.type === "error"
            ? `Modal-footer--error`
            : `Modal-footer--ok`
        }`}
      >
        <Button
          onClick={ModalCenterProps.onHide}
          variant="outline-primary"
          className="center"
        >
          X
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCenter;
