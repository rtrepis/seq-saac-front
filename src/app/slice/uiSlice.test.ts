import { UiPayload } from "../../Types/interface";
import { uiReducer } from "./uiSlice";

describe("Given the uiSlicer", () => {
  let previousUiPayload: UiPayload = {
    modal: {
      show: true,
      type: "error",
      message: "Message Error",
    },
    loading: false,
  };

  describe("When call uiModalClose reducer with previousState and a payload", () => {
    test("Then should return same previousUiPayload with show property to false", () => {
      const uiPayload = {
        type: "ui/uiModalClose",
      };
      const expectUi: UiPayload = {
        modal: {
          show: false,
          type: "error",
          message: "Message Error",
        },
        loading: false,
      };

      const newUI = uiReducer(previousUiPayload, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });

  describe("When call uiLoadingShow reducer with previousState and a payload", () => {
    test("Then should return same previousUiPayload with show property to true", () => {
      const uiPayload = {
        type: "ui/uiLoadingShow",
      };
      const expectUi: UiPayload = {
        modal: {
          show: true,
          type: "error",
          message: "Message Error",
        },
        loading: true,
      };

      const newUI = uiReducer(previousUiPayload, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });

  describe("When call uiLoadingClose reducer with previousState and a payload", () => {
    test("Then should return same previousUiPayload with show property to false", () => {
      const previousUiPayload: UiPayload = {
        modal: {
          show: true,
          type: "error",
          message: "",
        },
        loading: true,
      };

      const uiPayload = {
        type: "ui/uiLoadingClose",
      };
      const expectUi: UiPayload = {
        modal: {
          show: true,
          type: "error",
          message: "",
        },
        loading: false,
      };

      const newUI = uiReducer(previousUiPayload, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });
});
