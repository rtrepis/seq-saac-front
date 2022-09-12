import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import SelectPictogramsListShow from "./SelectPictogramsListShow";

const mockPictogramsArray = [2, 3];

/* jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockPictogramsArray,
})); */

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockPictogramsArray,
}));

describe("Given", () => {
  describe("When", () => {
    test("Then", () => {});
  });
});
