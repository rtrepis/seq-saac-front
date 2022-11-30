import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";
import useUser from "../../hooks/useUser";
import { NavLink } from "react-bootstrap";

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
    <RegisterFormStyled>
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
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="register-form mt-5"
          >
            <Form.Group className="mb-3" controlId="userNameGroup">
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

            <Form.Group className="mb-3" controlId="passwordGroup">
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
            <div className="register-form__footer">
              <Button
                type="submit"
                disabled={!isValid}
                className="register-form__button"
              >
                Iniciar sessió
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="text-center fs-6 m-3 d-flex col gap-2 text-muted">
        <NavLink href="register">Registear-se </NavLink> -{" "}
        <NavLink href="forgot"> No recordes la contrasenya</NavLink>
      </div>
    </RegisterFormStyled>
  );
};

export default LoginFormik;
