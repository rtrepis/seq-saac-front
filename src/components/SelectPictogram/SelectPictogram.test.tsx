import { screen } from "@testing-library/react";
import { renderUser } from "../../utils/test/test-utils-Loggin";
import SelectPictogram from "./SelectPictogram";

const mockPictograms = { showPictograms: [2, 5, 6] };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockPictograms,
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
});
