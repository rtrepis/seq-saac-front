import { render, screen } from "../../utils/test/test-utils-Logout";
import TermesPage from "./TermesPage";

describe("Give a page terms", () => {
  describe("When its rendering with component navigation and title page", () => {
    test("Then should show this component and title", () => {
      const pageTitle = "Termes i condicions";

      const expectNavigation = "";

      render(<TermesPage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });
});
