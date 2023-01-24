import { UiPayload } from "../../Types/interface";
import { previousUiPayload } from "../../utils/test/payloads/previousUiPayload";
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

  describe("When call uiPageCurrent reducer with new pageAllSequence payload", () => {
    test("Then should return same payload with new value this property", () => {
      const previousUiPayloadPageCurrent: UiPayload = {
        ...previousUiPayload,
        nav: {
          ...previousUiPayload.nav,
          allSequencesPublic: {
            ...previousUiPayload.nav.allSequencesPublic,
            pageCurrent: 0,
          },
        },
      };
      const uiPayload = {
        payload: 1,
        type: "ui/uiPageCurrent",
      };
      const expectUi: UiPayload = {
        ...previousUiPayload,
        nav: {
          ...previousUiPayload.nav,
          allSequencesPublic: {
            ...previousUiPayload.nav.allSequencesPublic,
            pageCurrent: 1,
          },
        },
      };

      const newUI = uiReducer(previousUiPayloadPageCurrent, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });

  describe("When call uiPageNavClose reduce with a payload type", () => {
    test("Then should return a new uiPayload and change property", () => {
      const previousUiPayloadNavClose: UiPayload = {
        ...previousUiPayload,
        nav: {
          ...previousUiPayload.nav,
          show: true,
        },
      };
      const uiPayload = {
        type: "ui/uiPageNavClose",
      };
      const expectUi: UiPayload = {
        ...previousUiPayload,
        nav: {
          ...previousUiPayload.nav,
          show: false,
        },
      };
      const newUI = uiReducer(previousUiPayloadNavClose, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });

  describe("When call uiPageNavOpen reduce with a payload type", () => {
    test("Then should return a new uiPayload and change property", () => {
      const previousUiPayloadNavOpen: UiPayload = {
        ...previousUiPayload,
        nav: {
          ...previousUiPayload.nav,
          show: false,
        },
      };
      const uiPayload = {
        type: "ui/uiPageNavShow",
      };
      const expectUi: UiPayload = {
        ...previousUiPayload,
        nav: {
          ...previousUiPayload.nav,
          show: true,
        },
      };
      const newUI = uiReducer(previousUiPayloadNavOpen, uiPayload);

      expect(newUI).toStrictEqual(expectUi);
    });
  });
});
