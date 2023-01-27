import pagesName from "../../language/ca";
import {
  act,
  render,
  screen,
  waitFor,
} from "../../utils/test/test-utils-Logout";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered it should", () => {
    test.only("Then display a navigation with the page title", async () => {
      const pageTitle = pagesName.home;
      const expectNavigation = "";
      const expectSearchBar = "searchSequences";

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await waitFor(() => act(() => render(<HomePage />)));
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
