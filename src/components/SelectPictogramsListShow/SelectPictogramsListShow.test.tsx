import { render, screen } from "@testing-library/react";
import SelectPictogramsListShow from "./SelectPictogramsListShow";

const mockDispatch = [2, 3];
const mockPictograms = { showPictograms: [2, 5, 6] };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockPictograms,
}));

describe("Given a SelectPictogramListShow component", () => {
  describe("When user search pictogram and returns 3 pictograms", () => {
    test("Then should show 3 pictograms", () => {
      const indexArray = 1;
      const lengthMockShowPictograms = 3;

      render(<SelectPictogramsListShow indexArrayPictograms={indexArray} />);
      const images = screen.getAllByRole("img");

      expect(images).toHaveLength(lengthMockShowPictograms);
    });
  });
});
