import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RegisterFormStyled from "./RegisterFormStyled";

interface InitialUserData {
  userName: "";
  password: "";
}

const RegisterForm = () => {
  const initialUserData: InitialUserData = {
    userName: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <RegisterFormStyled>
      <Form className="register-form">
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Usuari</Form.Label>
          <Form.Control
            name="userName"
            type="text"
            className=" register-form__input"
            placeholder="Introduïu el vostre nom"
            onChange={handleChange}
          />
          <Form.Text className="text-muted register-form__text">
            Introduïu un nom alfanumèric entre 3 i 30 digits
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contrasenya</Form.Label>
          <Form.Control
            name="password"
            type="password"
            className="register-form__input"
            placeholder="Introduïu la vostra contrasenyes"
            onChange={handleChange}
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
