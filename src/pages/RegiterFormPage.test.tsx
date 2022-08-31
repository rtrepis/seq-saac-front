import { render, screen } from "@testing-library/react";
import RegisterFormPage from "./RegisterFormPage";

describe("Give a page register form", () => {
  describe("When its instantiated with register form", () => {
    test("Then should show this register form", () => {
      render(<RegisterFormPage />);

      const registerForm = screen.getByLabelText("Usari");

      expect(registerForm).toBeInTheDocument();
    });
  });
});
