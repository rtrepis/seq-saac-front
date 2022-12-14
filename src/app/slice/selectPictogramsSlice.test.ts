import { SelectPictogram } from "../../models/sequencesInterface";
import {
  addSelectPictogramActionCreator,
  deleteSelectPictogramActionCreator,
  loadAllSelectPictogramActionCreator,
  restSelectPictogramsActionCreator,
  selectPictogramsReducer,
  updateSelectPictogramActionCreator,
} from "./selectPictogramsSlice";

describe("Given the slice selectPictogramsSlice", () => {
  describe("When call addSelectPictogram reducer with previousState and payload", () => {
    test("Then should return same previousSelectPictogramPayload with show new property", () => {
      const previousSequencesPayload: SelectPictogram[] = [];
      const expectSelectPictogram: SelectPictogram = {
        index: 1,
        pictogram: 123,
      };

      const selectPictogramPayLoad = addSelectPictogramActionCreator(
        expectSelectPictogram
      );

      const newSelectPictogram = selectPictogramsReducer(
        previousSequencesPayload,
        selectPictogramPayLoad
      );

      expect(newSelectPictogram).toStrictEqual([expectSelectPictogram]);
    });
  });

  describe("When call updateSelectPictogram reducer with previousState and payload", () => {
    test("Then should return same previousSequencePayload with show new property", () => {
      const previousSequencesPayload: SelectPictogram[] = [
        {
          index: 1,
          pictogram: 123,
        },
      ];
      const expectSelectPictogram: SelectPictogram = {
        index: 1,
        pictogram: 321,
      };

      const selectPictogramPayLoad = updateSelectPictogramActionCreator(
        expectSelectPictogram
      );

      const newSelectPictogram = selectPictogramsReducer(
        previousSequencesPayload,
        selectPictogramPayLoad
      );

      expect(newSelectPictogram).toStrictEqual([expectSelectPictogram]);
    });
  });

  describe("When call updateSelectPictogram with previousState and different payload", () => {
    test("Then should not return changes in previousSequencePayload property", () => {
      const previousSequencesPayload: SelectPictogram[] = [
        {
          index: 1,
          pictogram: 123,
        },
      ];
      const expectSelectPictogram: SelectPictogram = {
        index: 2,
        pictogram: 444,
      };

      const selectPictogramPayLoad = updateSelectPictogramActionCreator(
        expectSelectPictogram
      );

      const newSelectPictogram = selectPictogramsReducer(
        previousSequencesPayload,
        selectPictogramPayLoad
      );

      expect(newSelectPictogram).not.toStrictEqual([expectSelectPictogram]);
    });
  });

  describe("When call deleteSelectPictogram with previousState", () => {
    test("Then should return previousSequence length -1", () => {
      const previousSequencesPayload: SelectPictogram[] = [
        {
          index: 1,
          pictogram: 123,
        },
      ];

      const selectPictogramPayLoad = deleteSelectPictogramActionCreator();

      const newSelectPictogram = selectPictogramsReducer(
        previousSequencesPayload,
        selectPictogramPayLoad
      );

      expect(newSelectPictogram).toHaveLength(0);
    });
  });

  describe("When call resetSelectPictograms with previousState", () => {
    test("Then should return previousSequence empty", () => {
      const previousSequencesPayload: SelectPictogram[] = [
        {
          index: 1,
          pictogram: 123,
        },
        {
          index: 1,
          pictogram: 123,
        },
      ];
      const expectLengthPictograms = 0;

      const selectPictogramPayLoad = restSelectPictogramsActionCreator();

      const newSelectPictogram = selectPictogramsReducer(
        previousSequencesPayload,
        selectPictogramPayLoad
      );

      expect(newSelectPictogram).toHaveLength(expectLengthPictograms);
    });
  });

  describe("When call loadAllSelectPictogram with previousState", () => {
    test("Then should return previousSequence all selectPictograms of sequences", () => {
      const previousSequencesPayload: SelectPictogram[] = [
        {
          index: 1,
          pictogram: 123,
        },
      ];
      const expectPictogramsOfSequences: SelectPictogram[] = [
        {
          index: 1,
          pictogram: 123,
        },
        {
          index: 2,
          pictogram: 123,
        },
      ];
      const expectLengthPictograms = 2;

      const selectPictogramPayLoad = loadAllSelectPictogramActionCreator(
        expectPictogramsOfSequences
      );

      const newSelectPictogram = selectPictogramsReducer(
        previousSequencesPayload,
        selectPictogramPayLoad
      );

      expect(newSelectPictogram).toHaveLength(expectLengthPictograms);
    });
  });
});
