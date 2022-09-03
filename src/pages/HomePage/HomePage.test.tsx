import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered it should", () => {
    test("Then display a navigation with the page title", () => {
      const pageTitle = "SEQ-SAAC";
      const expectNavigation = "";

      render(<HomePage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });
});
