import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import RegisterFormikStyled from "./RegisterFormikStyled";
import { Nav } from "react-bootstrap";
import useUser from "../../../hooks/useUser";

const schema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Requrit min 3 caracters")
    .max(30, "Exedit max 30 caracters")
    .required("Nom d'usuari és requirit"),
  email: yup
    .string()
    .email("Introduïu un correu electrònic vàlid")
    .required("Correu electrònic és requerit"),
  password: yup
    .string()
    .min(3, "Requrit min 3 caracters")
    .max(30, "Requrit min 3 caracters")
    .required("Contrasenya és requerit"),
  confirmPassword: yup
    .string()
    .required("Confirmació contrasenya és requerit")
    .oneOf([yup.ref("password"), null], "No coincideix amb la contrasenya"),
  terms: yup.bool().required().oneOf([true], "Acceptació és requierit"),
});

const RegisterFormik = (): JSX.Element => {
  const { postRegister } = useUser();
  return (
    <RegisterFormikStyled>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          const dataPostRegister = {
            userName: values.userName,
            password: values.password,
            email: values.email,
          };
          postRegister(dataPostRegister);
        }}
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
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
                isValid={touched.userName && !errors.userName}
                isInvalid={touched.userName && !!errors.userName}
              />

              <Form.Control.Feedback>
                Validat correctament!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.userName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="emailGroup">
              <Form.Label>Correu eletrònic</Form.Label>
              <Form.Control
                type="text"
                placeholder="email@domini.org"
                name="email"
                className=" register-form__input"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback>
                Validat correctament!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordGroup">
              <Form.Label>Contrasenya</Form.Label>

              <Form.Control
                type="password"
                name="password"
                placeholder=""
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback>
                Validat correctament!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPasswordGroup">
              <Form.Label>Confirmació Contrasenya</Form.Label>

              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder=""
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              />
              <Form.Control.Feedback>
                Validat correctament!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Acceptacío termes i condicions"
                onChange={handleChange}
                isInvalid={touched.confirmPassword && !!errors.terms}
                isValid={touched.terms && !errors.terms}
                id="validationFormik0"
              />
              <Form.Text className="text-muted register-form__text">
                <Nav.Link href="terms">
                  Coneixeu els termes i condicions d'ús
                </Nav.Link>
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.terms}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="register-form__footer">
              <Button
                type="submit"
                disabled={!isValid}
                className="register-form__button"
              >
                Registra't
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </RegisterFormikStyled>
  );
};

export default RegisterFormik;
