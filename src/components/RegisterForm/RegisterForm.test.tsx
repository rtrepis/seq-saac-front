import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

const mockPostRegister = jest.fn();

jest.mock("../../hooks/useUser", () => () => ({
  postRegister: mockPostRegister,
}));

describe("Give a RegisterForm Component", () => {
  describe("When its instantiated with inputs name and passwords", () => {
    test("Then should show this component", () => {
      render(<RegisterForm />);

      const userName = screen.getByLabelText("Usuari");
      const password = screen.getByLabelText("Contrasenya");

      expect(userName).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });
  describe("When the user types any value on the fields", () => {
    test("Then should show this type in fields", async () => {
      const textType = "Friend";
      render(<RegisterForm />);

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
      render(<RegisterForm />);

      const userName = screen.getByLabelText("Usuari");
      const password = screen.getByLabelText("Contrasenya");
      const button = screen.getByRole("button", { name: "Regitra't" });

      await userEvent.type(userName, textType);
      await userEvent.type(password, textType);

      await userEvent.click(button);

      expect(mockPostRegister).toHaveBeenCalledWith(userCorret);
    });
  });
  describe("When user type incorrect userName, password try submit form", () => {
    test("Then should cannot submit form", async () => {
      const textType = "In";
      render(<RegisterForm />);

      const userName = screen.getByLabelText("Usuari");
      const password = screen.getByLabelText("Contrasenya");
      const button = screen.getByRole("button", { name: "Regitra't" });

      await userEvent.type(userName, textType);
      await userEvent.type(password, textType);

      await userEvent.click(button);

      expect(mockPostRegister).not.toHaveBeenCalled();
    });
  });
});
