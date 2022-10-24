import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Formik } from "formik";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const schema = yup.object().shape({
  userName: yup.string().min(3, "es curt nen").max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().min(3).max(30).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null]),
  terms: yup
    .bool()
    .required()
    .oneOf([true], "Xaval Accepta les condicions si no Tururu"),
});

const FormFormik = (): JSX.Element => {
  return (
    <RegisterFormStyled>
      <Formik
        validationSchema={schema}
        onSubmit={() => {
          console.log("Submit");
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
          <Form noValidate onSubmit={handleSubmit} className="register-form">
            <Form.Group className="mb-3" controlId="userNameGroup">
              <Form.Label>Usuari</Form.Label>

              <Form.Control
                type="text"
                name="userName"
                placeholder="Introduïu el vostre nom"
                className=" register-form__input"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.userName && !errors.userName}
                isInvalid={touched.userName && !!errors.userName}
              />

              <Form.Text className="text-muted register-form__text">
                Introduïu un nom alfanumèric entre 3 i 30 digits
              </Form.Text>
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
              <Form.Text className="text-muted register-form__text">
                Introduïu una correu vàlid.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordGroup">
              <Form.Label>Contrasenya</Form.Label>

              <Form.Control
                type="text"
                name="password"
                placeholder="Introduïu la vostra contrasenyes"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />

              <Form.Text className="text-muted register-form__text">
                Introduïu una contrasenya entre 3 i 30 digits.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPasswordGroup">
              <Form.Label>Confirmació Contrasenya</Form.Label>

              <Form.Control
                type="text"
                name="confirmPassword"
                placeholder="Introduïu la vostra contrasenyes"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              />

              <Form.Text className="text-muted register-form__text">
                Introduïu la contrasenya de nou.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>

            <div className="register-form__footer">
              <Button
                type="submit"
                disabled={!isValid}
                className="register-form__button"
              >
                Submit form
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </RegisterFormStyled>
  );
};

export default FormFormik;
