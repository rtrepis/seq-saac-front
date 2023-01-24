import { SequencesI } from "../../models/sequencesInterface";
import {
  createSequencesActionCreator,
  deleteSequenceIdActionCreator,
  loadSequencesActionCreator,
  sequencesReducer,
} from "./sequencesSlice";

describe("Given the sequencesSlicer", () => {
  const previousSequencesPayload = [
    {
      id: "",
      name: "",
      pictograms: [0, 0],
      privately: true,
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
          privately: true,
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

  describe("When call createSequence reducer with protoSequence and payload", () => {
    test("Then should return same previousSequencePayload with show new property", () => {
      const previousSequencePayload = {
        id: "",
        name: "",
        owner: "235",
        pictograms: [0, 0],
        privately: true,
      };

      const expectSequences = {
        id: "2354634t",
        name: "Rentar mans",
        pictograms: [1234, 1245, 6788, 4322],
        privately: true,
        owner: "235",
      };
      const arrayExpect = [previousSequencePayload, expectSequences];

      const sequencesPayLoad = createSequencesActionCreator(expectSequences);

      const newSequences = sequencesReducer(
        previousSequencesPayload,
        sequencesPayLoad
      );

      expect(newSequences).toStrictEqual(arrayExpect);
    });
  });

  describe("When called deleteSequenceId with previousState id payload", () => {
    test("Then should return previousState without sequence id", () => {
      const previousSequencePayload = [
        {
          id: "",
          name: "",
          owner: "235",
          pictograms: [0, 0],
          privately: true,
        },
      ];
      const arraySequenceExpect: SequencesI[] = [];

      const sequencesPayLoad = deleteSequenceIdActionCreator("");

      const newSequence = sequencesReducer(
        previousSequencePayload,
        sequencesPayLoad
      );

      expect(newSequence).toStrictEqual(arraySequenceExpect);
    });
  });
});
