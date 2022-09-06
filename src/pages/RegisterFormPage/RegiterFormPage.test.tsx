import { screen } from "@testing-library/react";
import RegisterFormPage from "./RegisterFormPage";
import { render } from "../../utils/test/test-utils-Loggout";

describe("Give a page register form", () => {
  describe("When its rendering register form with input 'Usuari'", () => {
    test("Then should show this register form", () => {
      const expectLabelText = "Usuari";

      render(<RegisterFormPage />);
      const registerForm = screen.getByLabelText(expectLabelText);

      expect(registerForm).toBeInTheDocument();
    });
  });
  describe("When its rendering with component navigation and title page", () => {
    test("Then should show this component and title", () => {
      const pageTitle = "Registrar-se";
      const expectNavigation = "";

      render(<RegisterFormPage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });
});
