import { screen } from "@testing-library/react";
import { renderUser } from "../../utils/test/test-utils-Loggin";
import SelectPictogram from "./SelectPictogram";

const mockPictogramsArray = [1, 2, 3];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockPictogramsArray,
}));

describe("Given a component SelecPictogram", () => {
  describe("When is rendered with a 'cerca' input", () => {
    test("Then should show this input", () => {
      const expectInput = "Cerca";

      const input = screen.getAllByRole("img");

      expect(input).toHaveLength(1);
    });
  });
});
