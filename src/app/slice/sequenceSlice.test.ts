import { SequenceInitialState } from "../../models/sequencesInterface";
import { loadSequencesActionCreator, sequencesReducer } from "./sequencesSlice";

describe("Given the sequencesSlicer", () => {
  const previousSequencesPayload: SequenceInitialState = [
    {
      id: "",
      name: "",
      pictograms: [0, 0],
      private: true,
      owner: "235",
    },
  ];
  describe("When call loadSequences reducer with previousState and payload", () => {
    test("Then should return same previousSequencePayload with show new property", () => {
      const expectSequences = [
        {
          id: "2354634t",
          name: "Rentar mans",
          pictograms: [1234, 1245, 6788, 4322],
          private: true,
          owner: "235",
        },
      ];
      const sequencesPayLoad = loadSequencesActionCreator(expectSequences);

      const newSequences = sequencesReducer(
        previousSequencesPayload,
        sequencesPayLoad
      );

      expect(newSequences).toStrictEqual(expectSequences);
    });
  });
});
