import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";
import useUser from "../../hooks/useUser";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Introduïu un correu electrònic vàlid")
    .required("Correu electrònic és requerit"),
});

const ForgotFormik = (): JSX.Element => {
  const { postForgot } = useUser();
  return (
    <RegisterFormStyled>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          const dataPostForgot = {
            email: values.email,
          };
          postForgot(dataPostForgot);
        }}
        initialValues={{
          email: "",
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

            <div className="register-form__footer">
              <Button
                type="submit"
                disabled={!isValid}
                className="register-form__button"
              >
                Recuperar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </RegisterFormStyled>
  );
};

export default ForgotFormik;
