import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Give a RegisterForm Component", () => {
  describe("When its instantiated with name and passwords", () => {
    test("Then should show this component", () => {
      render(<RegisterForm />);

      const userName = screen.getByLabelText("Usari");
      const password = screen.getByLabelText("Contrasenya");

      expect(userName).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });
});
