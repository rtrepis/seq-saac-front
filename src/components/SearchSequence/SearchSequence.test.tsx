import { render, screen } from "../../utils/test/test-utils-Logout";
import SearchSequence from "./SearchSequence";
import userEvent from "@testing-library/user-event";

const mockGetSearch = jest.fn();

jest.mock("../../hooks/useApi", () => () => ({
  getSearchSequences: mockGetSearch,
}));

describe("Give a component SearchSequences", () => {
  describe("When rendered this component", () => {
    test("Then should show expect in the document", () => {
      const expectSechSequence = "searchSequences";

      render(<SearchSequence />);
      const nameTextBox = screen.getByRole("textbox", {
        name: expectSechSequence,
      });

      expect(nameTextBox).toBeInTheDocument();
    });
  });

  describe("When user type words search and pres enter", () => {
    test("Then should called useApi", async () => {
      const typeWordSearch = "anar";
      const typeEnterEvent = "{enter}";
      const inputSearch = "searchSequences";

      render(<SearchSequence />);
      const searchInput = screen.getByRole("textbox", {
        name: inputSearch,
      });

      await userEvent.type(searchInput, typeWordSearch + typeEnterEvent);

      expect(mockGetSearch).toHaveBeenCalledWith(typeWordSearch);
    });
  });
});
