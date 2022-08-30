import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  return (
    <RegisterFormStyled data-testid="registerForm">
      <Form data-testid="registerForm" className="register-form">
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Usari</Form.Label>
          <Form.Control
            type="text"
            className=" register-form__input"
            placeholder="Introduïu el vostre nom"
          />
          <Form.Text className="text-muted">
            Introduïu un nom alfanumèric entre 3 i 30 digits
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contrasenya</Form.Label>
          <Form.Control
            type="password"
            className="register-form__input"
            placeholder="Introduïu la vostra contrasenyes"
          />
          <Form.Text className="text-muted register-form__text">
            Introduïu una contrasenya entre 3 i 30 digits.
          </Form.Text>
        </Form.Group>
        <div className="register-form__footer">
          <Button
            variant="primary"
            type="submit"
            className="register-form__button"
          >
            Regitra't
          </Button>
        </div>
      </Form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
