import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

const mockPostLogin = jest.fn();

jest.mock("../../hooks/useUser", () => () => ({
  postLogin: mockPostLogin,
}));

describe("Give a LoginForm Component", () => {
  describe("When its rendering with inputs name and passwords", () => {
    test("Then should show this component", () => {
      render(<LoginForm />);

      const userName = screen.getByLabelText("Usuari");
      const password = screen.getByLabelText("Contrasenya");

      expect(userName).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });

  describe("When the user types any value on the fields", () => {
    test("Then should show this type in fields", async () => {
      const textType = "Friend";
      render(<LoginForm />);

      const userName = screen.getByLabelText("Usuari");
      const password = screen.getByLabelText("Contrasenya");

      await userEvent.type(userName, textType);
      await userEvent.type(password, textType);

      expect(userName).toHaveValue(textType);
      expect(password).toHaveValue(textType);
    });
  });

  describe("When user type the correct userName, password and submit form", () => {
    test("Then should submit form", async () => {
      const textType = "Correct";
      const userCorret = {
        userName: textType,
        password: textType,
      };
      render(<LoginForm />);

      const userNameCorrect = screen.getByLabelText("Usuari");
      const passwordCorrect = screen.getByLabelText("Contrasenya");
      const button = screen.getByRole("button", { name: "Inicia sessió" });

      await userEvent.type(userNameCorrect, textType);
      await userEvent.type(passwordCorrect, textType);

      await userEvent.click(button);

      expect(mockPostLogin).toHaveBeenCalledWith(userCorret);
    });
  });

  describe("When user type incorrect userName, password try submit form", () => {
    test("Then should cannot submit form", async () => {
      const textType = "In";
      render(<LoginForm />);

      const userNameIncorrect = screen.getByLabelText("Usuari");
      const passwordIncorrect = screen.getByLabelText("Contrasenya");
      const button = screen.getByRole("button", { name: "Inicia sessió" });

      await userEvent.type(userNameIncorrect, textType);
      await userEvent.type(passwordIncorrect, textType);

      await userEvent.click(button);

      expect(mockPostLogin).not.toHaveBeenCalled();
    });
  });
});
