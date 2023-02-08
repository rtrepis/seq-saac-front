import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import useUser from "../../../hooks/useUser";
import { Col, Container, NavLink, Row } from "react-bootstrap";

const schema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Requrit min 3 caracters")
    .max(30, "Exedit max 30 caracters")
    .required("Nom d'usuari és requirit"),
  password: yup
    .string()
    .min(3, "Requrit min 3 caracters")
    .max(30, "Requrit min 3 caracters")
    .required("Contrasenya és requerit"),
});

const LoginFormik = (): JSX.Element => {
  const { postLogin } = useUser();
  return (
    <Container className="border border-2 border-primary rounded-4 mt-3">
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          const dataPostLogin = {
            userName: values.userName,
            password: values.password,
          };
          postLogin(dataPostLogin);
        }}
        initialValues={{
          userName: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit} className="mt-5">
            <Form.Group className="mb-4" controlId="userNameGroup">
              <Form.Label>Usuari</Form.Label>

              <Form.Control
                type="text"
                name="userName"
                placeholder="Nom d'usuari"
                className=" register-form__input"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.userName && !!errors.userName}
              />

              <Form.Control.Feedback type="invalid">
                {errors.userName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="passwordGroup">
              <Form.Label>Contrasenya</Form.Label>

              <Form.Control
                type="password"
                name="password"
                placeholder="***"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && !!errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="text-center">
              <Col>
                <Button type="submit" disabled={!isValid} className="m-3">
                  Iniciar sessió
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <Row className="text-center align-items-center fs-6 mt-4 mb-3 text-muted">
        <Col>
          <NavLink href="register" className="">
            Registear-se{" "}
          </NavLink>
        </Col>
        <Col>
          <NavLink href="forgot"> No recordes la contrasenya</NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginFormik;
