import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  return (
    <RegisterFormStyled data-testid="registerForm">
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Nom usari</Form.Label>
        <Form.Control type="text" placeholder="Introduïu el vostre nom" />
        <Form.Text className="text-muted">
          Introduïu un nom alfanumèric més llarg de 3 digits i menys de 30.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contrasenya</Form.Label>
        <Form.Control
          type="password"
          placeholder="Introduïu la vostra contrasenyes"
        />
        <Form.Text className="text-muted">
          Introduïu un nom alfanumèric més llarg de 3 digits i menys de 30.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Regitra't
      </Button>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
