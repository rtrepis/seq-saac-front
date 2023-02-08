import LoginFormik from "../../components/user/LoginFormik/LoginFormik";
import Navigation from "../../components/ui/Navigation/Navigation";
import { Col, Container, Row } from "react-bootstrap";

const LoginFormPage = (): JSX.Element => {
  return (
    <>
      <Navigation linkPage="login" />
      <header>
        <Row className="justify-content-center">
          <Col sm={8} md={6} xl={4}>
            <h2 className="d-none d-md-block m-3 text-center">Inicia sessió</h2>
          </Col>
        </Row>
      </header>

      <Container>
        <Row className="justify-content-center">
          <Col sm={8} md={6} xl={4}>
            <LoginFormik />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LoginFormPage;
