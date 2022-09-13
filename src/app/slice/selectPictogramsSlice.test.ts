import { SelectPictogram } from "../../models/sequencesInterface";
import {
  addSelectPictogramActionCreator,
  selectPictogramsReducer,
  updateSelectPictogramActionCreator,
} from "./selectPictogramsSlice";
import {
  createSequencesActionCreator,
  sequencesReducer,
} from "./sequencesSlice";

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

  describe("When call updateSelecPictogram reducer with previousState and payload", () => {
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
});
