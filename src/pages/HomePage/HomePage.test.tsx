import { render, screen } from "../../utils/test/test-utils-Logout";
import HomePage from "./HomePage";
import mockSequenceArray from "../../mocks/mockSequenceArray";

describe("Given a HomePage component", () => {
  const preloadedState = {
    sequences: mockSequenceArray,
    ui: {
      nav: {
        allSequencesPublic: { itemsTotal: 20, pageCurrent: 2 },
        show: true,
      },
    },
  };
  describe("When rendered it should", () => {
    test("Then display a navigation with the page title", () => {
      const pageTitle = "SEQ-SAAC";
      const expectNavigation = "";
      const expectSearchBar = "searchSequences";

      render(<HomePage />, { preloadedState });
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });
      const searchPlaceholder = screen.getByRole("textbox", {
        name: expectSearchBar,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
      expect(searchPlaceholder).toBeInTheDocument();
    });
  });
});
