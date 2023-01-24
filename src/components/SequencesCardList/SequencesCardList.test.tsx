import { SequencesI } from "../../models/sequencesInterface";
import { PreloadedState } from "../../Types/interfaceTest";
import { previousUiPayload } from "../../utils/test/payloads/previousUiPayload";
import { render, screen } from "../../utils/test/test-utils-Logout";
import SequencesCardList from "./SequencesCardList";

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

  describe("When state.ui loading is true", () => {
    test("Then should show the loading component", () => {
      const preloadedState: PreloadedState = {
        ui: { ...previousUiPayload, loading: true },
      };
      const expectLoading = "Loading...";
      const sequencesProps: SequencesI[] = [];

      render(<SequencesCardList sequences={sequencesProps} />, {
        preloadedState,
      });
      const text = screen.getByText(expectLoading);

      expect(text).toBeInTheDocument();
    });
  });
});
