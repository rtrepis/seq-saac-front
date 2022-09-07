import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uiModalCloseActionCreator } from "../../app/slice/uiSlice";
import { ModalType } from "../../Types/interface";
import "./ModalCenter.css";

interface ModalCenterProps {
  show: boolean;
  type: ModalType;
  message: string;
}

const ModalCenter = (ModalCenterProps: ModalCenterProps) => {
  const dispatch = useDispatch();

  const handlerModalClose = () => {
    dispatch(uiModalCloseActionCreator());
  };

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
          onClick={handlerModalClose}
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
