import { render, screen } from "@testing-library/react";
import SelectPictogramShow from "./SelectPictogramShow";

const mockDispatch = jest.fn();
const mockPictograms = { showPictograms: [2, 5, 6] };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockPictograms,
}));

describe("Given a Pictogram Show component", () => {
  describe("When we pass a pictogram number to it", () => {
    test("Then we expect it to render this pictogram", () => {
      const pictogramProps = 11737;
      const altImages = "pictograma";

      render(
        <SelectPictogramShow
          pictogram={pictogramProps}
          indexArrayPictograms={1}
        />
      );
      const images = screen.getByRole("img", { name: altImages });

      expect(images).toBeInTheDocument();
    });
  });
});
