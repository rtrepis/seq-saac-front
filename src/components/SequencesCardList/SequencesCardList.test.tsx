import mockSequenceArray from "../../mocks/mockSequenceArray";
import { render, screen } from "../../utils/test/test-utils-Loggout";
import SequencesCardList from "./SequencesCardList";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSequenceArray,
}));

describe("Give a component SequencesCardList", () => {
  describe("When it instantiate whit a array of objects", () => {
    test("Then we will have as many h2 as the length of the array", () => {
      render(<SequencesCardList />);
      const expectTitles = screen.getAllByRole("heading", { level: 3 });

      expect(expectTitles).toHaveLength(mockSequenceArray.length);
    });
  });
});
