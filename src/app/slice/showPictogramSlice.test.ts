import { Pictograms } from "../../Types/interface";
import {
  loadShowPictogramsActionCreator,
  showPictogramsReducer,
} from "./showPictogramsSlice";

describe("Given the showPictogramSlice", () => {
  const previousShowPictogramPayload: Pictograms = [];
  describe("When call loadSequences reducer with previousState and payload", () => {
    test("Then should return same previous Payload with show new property", () => {
      const expectPictograms = [234];

      const ShowPictogramsPayLoad = loadShowPictogramsActionCreator([234]);

      const newSequences = showPictogramsReducer(
        previousShowPictogramPayload,
        ShowPictogramsPayLoad
      );

      expect(newSequences).toStrictEqual(expectPictograms);
    });
  });
});
