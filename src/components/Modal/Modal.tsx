import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

const VerticallyCenteredModal = (props: any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        className={`text-center ${
          props.type === "error" ? `Modal-body--error` : `Modal-body--ok`
        }`}
      >
        {props.message}
      </Modal.Body>
      <Modal.Footer
        className={`justify-content-center ${
          props.type === "error" ? `Modal-footer--error` : `Modal-footer--ok`
        }`}
      >
        <Button
          onClick={props.onHide}
          variant="outline-primary"
          className="center"
        >
          X
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerticallyCenteredModal;
