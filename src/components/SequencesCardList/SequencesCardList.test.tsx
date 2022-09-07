import { render, screen } from "../../utils/test/test-utils-Loggout";
import SequencesCardList from "./SequencesCardList";

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

describe("Give a component SequencesCardList", () => {
  describe("When it instantiate whit a array of objects", () => {
    test("Then we will have as many h2 as the length of the array", () => {
      render(<SequencesCardList />);
      const expectTitles = screen.getAllByRole("heading", { level: 2 });

      expect(expectTitles).toHaveLength(mockSequenceArray.length);
    });
  });
});
