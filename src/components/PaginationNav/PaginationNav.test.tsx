import userEvent from "@testing-library/user-event";
import { render, screen } from "../../utils/test/test-utils-Logout";
import PaginationNav from "./PaginationNav";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

beforeEach(() => jest.clearAllMocks());

describe("Give a component PaginationNav", () => {
  describe("When this components is rendering in pageCurrent 3", () => {
    const pageNav = {
      itemsTotal: 80,
      pageCurrent: 2,
    };
    test("Then should show button to page 1 & 2 and 4 & 5", () => {
      render(<PaginationNav pageNav={pageNav} />);
      const pages = [];
      pages[0] = screen.getByRole("button", { name: "1" });
      pages[1] = screen.getByRole("button", { name: "2" });
      pages[2] = screen.getByRole("button", { name: "4" });
      pages[3] = screen.getByRole("button", { name: "5" });

      pages.forEach((page) => {
        expect(page).toBeInTheDocument();
      });
    });

    test("Then clicked user and called mockDispatch", async () => {
      render(<PaginationNav pageNav={pageNav} />);
      const pages = [];
      pages[0] = screen.getByRole("button", { name: "1" });
      pages[1] = screen.getByRole("button", { name: "2" });
      pages[2] = screen.getByRole("button", { name: "4" });
      pages[3] = screen.getByRole("button", { name: "5" });

      await userEvent.click(pages[0]);
      await userEvent.click(pages[1]);
      await userEvent.click(pages[2]);
      await userEvent.click(pages[3]);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
