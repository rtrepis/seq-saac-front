import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { render } from "../../utils/test/test-utils-Loggout";

const mockSequenceArray = [
  {
    name: "Rentar mans",
    pictograms: [11737, 8975, 35729, 2443, 11739],
    id: "63170593d41384063b90467a",
  },
  {
    name: "Rentar mans 2",
    pictograms: [11737, 8975, 35729, 2443, 11739],
    id: "6317837eff5c3af56def73b3",
  },
  {
    name: "Rentar mans 3",
    pictograms: [11737, 8975, 35729, 2443, 11739],
    id: "63178389ff5c3af56def73b4",
  },
];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSequenceArray,
}));

describe("Given a HomePage component", () => {
  describe("When rendered it should", () => {
    test("Then display a navigation with the page title", () => {
      const pageTitle = "SEQ-SAAC";
      const expectNavigation = "";

      render(<HomePage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });
});
