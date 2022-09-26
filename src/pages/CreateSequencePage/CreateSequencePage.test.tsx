import { screen } from "@testing-library/react";
import { renderUser } from "../../utils/test/test-utils-Login";
import CreateSequencePage from "./CreateSequencePage";

const mockDispatch = jest.fn();
const mockPictograms = {
  showPictograms: [2, 5, 6],
  selectPictograms: [{ index: 1, pictogram: 1 }],
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockPictograms,
}));

describe("Give a page create sequence form", () => {
  describe("When its rendering with component navigation and title page", () => {
    test("Then should show this component and title", () => {
      const pageTitle = "Crear la seqüència";
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
