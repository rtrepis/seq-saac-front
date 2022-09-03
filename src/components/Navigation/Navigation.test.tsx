import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a navigation component", () => {
  describe("When it is rendered with props page title", () => {
    test("then it will display this title and your link", () => {
      const pageTitle = "Registrar-se";
      const pageLink = "register";

      render(<Navigation page={pageTitle} linkPage={pageLink} />);
      const title = screen.getByRole("heading", { name: pageTitle });
      const link = screen.getByRole("link", { name: pageTitle });

      expect(title).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });
});
