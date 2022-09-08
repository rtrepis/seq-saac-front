import { screen } from "@testing-library/react";
import mockSequenceArray from "../../mocks/mockSequenceArray";
import { renderUser } from "../../utils/test/test-utils-Loggin";
import MySequencePage from "./MySequencesPages";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSequenceArray,
}));

describe("Given a MySequences component", () => {
  describe("When rendered it should", () => {
    test("Then display a navigation with the page title", () => {
      const pageTitle = "Les meves seqüències";
      const expectNavigation = "";

      renderUser(<MySequencePage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });

  describe("When pass through an arraymock", () => {
    test("Then the past sequences are rendered", () => {
      renderUser(<MySequencePage />);

      const titles = screen.getAllByRole("heading", { level: 3 });

      expect(titles).toHaveLength(mockSequenceArray.length);
    });
  });
});
