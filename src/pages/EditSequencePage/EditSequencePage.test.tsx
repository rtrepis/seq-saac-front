import { render, screen } from "../../utils/test/test-utils-Logout";
import EditSequencePage from "./EditSequencePage";

const mockDispatch = jest.fn();
const mockSelector = {
  showPictograms: [2, 5, 6],
  selectPictograms: [{ index: 1, pictogram: 1 }],
  sequences: [
    {
      id: "idMock",
      name: "nameMock",
      owner: "ownerMock",
      pictograms: [1],
      privately: true,
    },
  ],
};

const mockParams = "idMock";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
  useParams: () => mockParams,
}));

describe("Given a component editSequencePage", () => {
  describe("When render with navigate header", () => {
    test("Then should show title page", () => {
      const expectTitlePage = "Editar la seqüència";

      render(<EditSequencePage />);
      const titlePage = screen.getByRole("heading", {
        level: 1,
        name: expectTitlePage,
      });

      expect(titlePage).toBeInTheDocument();
    });
  });
});
