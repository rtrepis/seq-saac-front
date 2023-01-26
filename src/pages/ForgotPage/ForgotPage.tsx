import { Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ForgotFormik from "../../components/user/ForgotFormik/ForgotFormik";
import ResetFormik from "../../components/user/ResetFormik/RestFormik";

const ForgotPage = (): JSX.Element => {
  const { code: confirmationCode } = useParams();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="primary"
        variant="dark"
        className="display-flex  justify-content-between p-2 ps-3 pe-3"
      >
        <Navbar.Brand className="ms-3">
          <h1 className="mb-0">Restablir Contrasenya</h1>
        </Navbar.Brand>
      </Navbar>
      {confirmationCode && <ResetFormik code={confirmationCode} />}
      {!confirmationCode && <ForgotFormik />};
    </>
  );
};

export default ForgotPage;
