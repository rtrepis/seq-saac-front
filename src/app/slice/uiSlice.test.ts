import { ModalPayload } from "../../Types/interface";
import { uiReducer } from "./uiSlice";

describe("Given the uiSlicer", () => {
  const previousUiPayload: ModalPayload = {
    show: true,
    type: "error",
    message: "Message Error",
  };

  describe("When call uiModalClose reducer with previousState and a payload", () => {
    test("Then should return same previousUiPayload with show property to false", () => {
      const uiPayload = {
        type: "ui/uiModalClose",
      };
      const expectUi = {
        show: false,
        type: "error",
        message: "Message Error",
      };

      const newUI = uiReducer(previousUiPayload, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });
});
