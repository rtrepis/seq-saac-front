import { SyntheticEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useUser from "../../hooks/useUser";
import { NamePasswordUserData } from "../../models/userInterface";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  const { postRegister } = useUser();

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

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    await postRegister(userData);
    setUserData(initialUserData);
  };

  const hasEmptyFields =
    userData.userName.length < 3 || userData.password.length < 3;

  return (
    <RegisterFormStyled>
      <Form className="register-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Usuari</Form.Label>
          <Form.Control
            type="text"
            className=" register-form__input"
            placeholder="Introduïu el vostre nom"
            onChange={handleChange}
            autoComplete="off"
          />
          <Form.Text className="text-muted register-form__text">
            Introduïu un nom alfanumèric entre 3 i 30 digits
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contrasenya</Form.Label>
          <Form.Control
            type="password"
            className="register-form__input"
            placeholder="Introduïu la vostra contrasenyes"
            onChange={handleChange}
            autoComplete="off"
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
            disabled={hasEmptyFields}
          >
            Regitra't
          </Button>
        </div>
      </Form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
