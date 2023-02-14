import { SequencesI } from "../../models/sequencesInterface";
import { render, screen } from "../../utils/test/test-utils-Logout";
import SequencesCardList from "./SequencesCardList";

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe("Give a component SequencesCardList", () => {
  describe("When it receive whit a array for props", () => {
    test("Then we will have as many h3 as the length of the array", () => {
      const expectSequences = [
        {
          id: "2354634t",
          name: "Rentar mans",
          pictograms: [1234, 1245, 6788, 4322],
          privately: true,
          owner: "235",
        },
      ];

      render(<SequencesCardList sequences={expectSequences} />);
      const expectTitles = screen.getAllByRole("heading", { level: 3 });

      expect(expectTitles).toHaveLength(expectSequences.length);
    });
  });

  describe("When receive whit array empty", () => {
    test("Then should show expect test", () => {
      const expectText = "No hem trobat cap seqüència";
      const sequencesProps: SequencesI[] = [];

      render(<SequencesCardList sequences={sequencesProps} />);
      const text = screen.getByText(expectText);

      expect(text).toBeInTheDocument();
    });
  });
});
