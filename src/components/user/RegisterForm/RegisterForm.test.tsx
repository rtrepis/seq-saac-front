import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

const mockPostRegister = jest.fn();

jest.mock("../../../hooks/useUser", () => () => ({
  postRegister: mockPostRegister,
}));

describe("Give a RegisterForm Component", () => {
  describe("When its rendering with inputs name and passwords", () => {
    test("Then should show this component", () => {
      const labelUserNameRegister = "Usuari";
      const labelPasswordRegister = "Contrasenya";

      render(<RegisterForm />);
      const userName = screen.getByLabelText(labelUserNameRegister);
      const password = screen.getByLabelText(labelPasswordRegister);

      expect(userName).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });

  describe("When the user types any value on the fields register", () => {
    test("Then should show this type in fields", async () => {
      const textType = "Register";
      const labelUserNameRegister = "Usuari";
      const labelPasswordRegister = "Contrasenya";

      render(<RegisterForm />);
      const userName = screen.getByLabelText(labelUserNameRegister);
      const password = screen.getByLabelText(labelPasswordRegister);

      await userEvent.type(userName, textType);
      await userEvent.type(password, textType);

      expect(userName).toHaveValue(textType);
      expect(password).toHaveValue(textType);
    });
  });

  describe("When register user type the correct userName, password and submit form", () => {
    test("Then should submit form", async () => {
      const textType = "CorrectRegister";
      const userCorret = {
        userName: textType,
        password: textType,
      };
      const labelUserNameRegister = "Usuari";
      const labelPasswordRegister = "Contrasenya";
      const buttonRegister = "Regitra't";

      render(<RegisterForm />);
      const userName = screen.getByLabelText(labelUserNameRegister);
      const password = screen.getByLabelText(labelPasswordRegister);
      const button = screen.getByRole("button", { name: buttonRegister });

      await userEvent.type(userName, userCorret.userName);
      await userEvent.type(password, userCorret.password);

      await userEvent.click(button);

      expect(mockPostRegister).toHaveBeenCalledWith(userCorret);
    });
  });

  describe("When register user type incorrect userName, password try submit form", () => {
    test("Then should cannot submit form", async () => {
      const textType = "In";
      const labelUserNameRegister = "Usuari";
      const labelPasswordRegister = "Contrasenya";
      const buttonRegister = "Regitra't";

      render(<RegisterForm />);
      const userName = screen.getByLabelText(labelUserNameRegister);
      const password = screen.getByLabelText(labelPasswordRegister);
      const button = screen.getByRole("button", { name: buttonRegister });

      await userEvent.type(userName, textType);
      await userEvent.type(password, textType);
      await userEvent.click(button);

      expect(mockPostRegister).not.toHaveBeenCalled();
    });
  });
});
