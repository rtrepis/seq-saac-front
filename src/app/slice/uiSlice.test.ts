import { UiPayload } from "../../Types/interface";
import { previousUiPayload } from "../../utils/payloads/previousUiPayload";
import { uiReducer } from "./uiSlice";

describe("Given the uiSlicer", () => {
  describe("When modal is open and call uiModalClose reducer with previousState and a payload", () => {
    test("Then should return same previousUiPayload with show property to false", () => {
      const previousUiPayloadOpenModal: UiPayload = {
        ...previousUiPayload,
        modal: { ...previousUiPayload.modal, show: true },
      };

      const uiPayload = {
        type: "ui/uiModalClose",
      };
      const expectUi: UiPayload = {
        ...previousUiPayload,
        modal: { ...previousUiPayload.modal, show: false },
      };

      const newUI = uiReducer(previousUiPayloadOpenModal, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });

  describe("When call uiLoadingShow reducer with previousState and a payload", () => {
    test("Then should return same previousUiPayload with show property to true", () => {
      const uiPayload = {
        type: "ui/uiLoadingShow",
      };
      const expectUi: UiPayload = {
        ...previousUiPayload,
        loading: true,
      };

      const newUI = uiReducer(previousUiPayload, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });

  describe("When call uiLoadingClose reducer with previousState and a payload", () => {
    test("Then should return same previousUiPayload with show property to false", () => {
      const previousUiPayloadLoadingOpen: UiPayload = {
        ...previousUiPayload,
        loading: true,
      };

      const uiPayload = {
        type: "ui/uiLoadingClose",
      };
      const expectUi: UiPayload = { ...previousUiPayload, loading: false };

      const newUI = uiReducer(previousUiPayloadLoadingOpen, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });
});
