import { render, screen } from "../../utils/test/test-utils-Loggout";
import SequencesCardList from "./SequencesCardList";

describe("Give a component SequencesCardList", () => {
  describe("When it receive whit a array for props", () => {
    test("Then we will have as many h3 as the length of the array", () => {
      const expectSequences = [
        {
          id: "2354634t",
          name: "Rentar mans",
          pictograms: [1234, 1245, 6788, 4322],
          private: true,
          owner: "235",
        },
      ];

      render(<SequencesCardList sequences={expectSequences} />);
      const expectTitles = screen.getAllByRole("heading", { level: 3 });

      expect(expectTitles).toHaveLength(expectSequences.length);
    });
  });
});
