import { screen } from "@testing-library/react";
import { renderUser } from "../../utils/test/test-utils-Loggin";
import CreateSequencePage from "./CreateSequencePage";

describe("Give a page create sequence form", () => {
  describe("When its rendering with component navigation and title page", () => {
    test("Then should show this component and title", () => {
      const pageTitle = "Crea la seqüència";
      const expectNavigation = "";

      renderUser(<CreateSequencePage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });
});
