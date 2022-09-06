import { screen } from "@testing-library/react";
import LoginFormPage from "./LoginFormPage";
import { render } from "../../utils/test/test-utils-Loggout";

describe("Give a page login form", () => {
  describe("When its rendering login form with input 'Usuari'", () => {
    test("Then should show this register form", () => {
      const expectLabelText = "Usuari";

      render(<LoginFormPage />);
      const registerForm = screen.getByLabelText(expectLabelText);

      expect(registerForm).toBeInTheDocument();
    });
  });
  describe("When its rendering with component navigation and title page", () => {
    test("Then should show this component and title", () => {
      const pageTitle = "Inicia sessió";
      const expectNavigation = "";

      render(<LoginFormPage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });
});
