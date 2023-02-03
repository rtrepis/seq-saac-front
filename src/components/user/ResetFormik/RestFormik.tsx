import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import useUser from "../../../hooks/useUser";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(3, "Requrit min 3 caracters")
    .max(30, "Requrit min 3 caracters")
    .required("Contrasenya és requerit"),
  confirmPassword: yup
    .string()
    .required("Confirmació contrasenya és requerit")
    .oneOf([yup.ref("password"), null], "No coincideix amb la contrasenya"),
});

interface ResetFormikProps {
  code?: string;
}

const ResetFormik = ({ code }: ResetFormikProps): JSX.Element => {
  const { patchReset: putReset } = useUser();
  return (
    <RegisterFormStyled>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          const dataPutForgot = {
            password: values.password,
            code: values.code,
          };
          putReset(dataPutForgot);
        }}
        initialValues={{
          password: "",
          confirmPassword: "",
          code: code,
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

            <div className="register-form__footer">
              <Button
                type="submit"
                disabled={!isValid}
                className="register-form__button"
              >
                Restablir
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </RegisterFormStyled>
  );
};

export default ResetFormik;
