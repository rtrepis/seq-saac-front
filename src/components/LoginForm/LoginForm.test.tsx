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

  describe("When login user type the correct userName, password and submit form", () => {
    test("Then should submit form", async () => {
      const textType = "Correct";
      const userCorret = {
        userName: textType,
        password: textType,
      };
      render(<LoginForm />);

      const userName = screen.getByLabelText("Usuari");
      const password = screen.getByLabelText("Contrasenya");
      const button = screen.getByRole("button", { name: "Inicia sessió" });

      await userEvent.type(userName, userCorret.userName);
      await userEvent.type(password, userCorret.password);

      await userEvent.click(button);

      expect(mockPostLogin).toHaveBeenCalledWith(userCorret);
    });
  });

  describe("When login user type incorrect userName, password try submit form", () => {
    test("Then should cannot submit form", async () => {
      const textType = "In";
      render(<LoginForm />);

      const userName = screen.getByLabelText("Usuari");
      const password = screen.getByLabelText("Contrasenya");
      const button = screen.getByRole("button", { name: "Inicia sessió" });

      await userEvent.type(userName, textType);
      await userEvent.type(password, textType);

      await userEvent.click(button);

      expect(mockPostLogin).not.toHaveBeenCalled();
    });
  });
});
