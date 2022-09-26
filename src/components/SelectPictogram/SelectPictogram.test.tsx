import { screen } from "@testing-library/react";
import { renderUser } from "../../utils/test/test-utils-Login";
import SelectPictogram from "./SelectPictogram";
import userEvent from "@testing-library/user-event";

const mockPictograms = { showPictograms: [2, 5, 6] };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockPictograms,
}));

const mockGetSearch = jest.fn();

jest.mock("../../hooks/useAraSaac", () => () => ({
  getSearchPictogram: mockGetSearch,
}));

describe("Given a component SelecPictogram", () => {
  describe("When is rendered with a 'cerca' input", () => {
    test("Then should show this input", () => {
      const expectInput = "Cerca";
      const expetLenght = 3;

      renderUser(<SelectPictogram indexArrayPictograms={1} key={0} />);
      const images = screen.getAllByRole("img");
      const input = screen.getByLabelText(expectInput);

      expect(images).toHaveLength(expetLenght);
      expect(input).toBeInTheDocument();
    });
  });

  describe("When user type words search and pres enter", () => {
    test("Then should called useAraSaac", async () => {
      const typeWordSearch = "poma{enter}";
      const labelSearch = "Cerca";

      renderUser(<SelectPictogram indexArrayPictograms={1} key={0} />);
      const searchInput = screen.getByLabelText(labelSearch);

      await userEvent.type(searchInput, typeWordSearch);

      expect(mockGetSearch).toHaveBeenCalled();
    });
  });
});
