import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

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
});
