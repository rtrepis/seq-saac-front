import { SyntheticEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useUser from "../../hooks/useUser";
import NamePasswordUserData from "../../types/userInterface";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const { postLogin } = useUser();

  const initialUserData: NamePasswordUserData = {
    userName: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const hasEmptyFields =
    userData.userName.length < 3 || userData.password.length < 3;

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await postLogin(userData);
  };

  return (
    <LoginFormStyled>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Usuari</Form.Label>
          <Form.Control
            type="text"
            className=" login-form__input"
            placeholder="Introduïu el vostre nom"
            onChange={handleChange}
            autoComplete="off"
          />
          <Form.Text className="text-muted login-form__text">
            Introduïu un nom alfanumèric entre 3 i 30 digits
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contrasenya</Form.Label>
          <Form.Control
            type="password"
            className="login-form__input"
            placeholder="Introduïu la vostra contrasenyes"
            onChange={handleChange}
            autoComplete="off"
          />
          <Form.Text className="text-muted login-form__text">
            Introduïu una contrasenya entre 3 i 30 digits.
          </Form.Text>
        </Form.Group>
        <div className="login-form__footer">
          <Button
            variant="primary"
            type="submit"
            className="login-form__button"
            disabled={hasEmptyFields}
          >
            Inicia sessió
          </Button>
        </div>
      </Form>
    </LoginFormStyled>
  );
};

export default LoginForm;
