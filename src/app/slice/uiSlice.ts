import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiPayload } from "../../Types/interface";

export const UiInitialState: UiPayload = {
  modal: { show: false, type: "ok", message: "" },
  loading: false,
  nav: {
    show: true,
    allSequencesPublic: { itemsTotal: 0, pageCurrent: 0 },
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: UiInitialState,
  reducers: {
    uiModalShow: (previousUi: UiPayload, action: PayloadAction<UiPayload>) =>
      action.payload,
    uiModalClose: (previousUi: UiPayload) => ({
      ...previousUi,
      modal: { ...previousUi.modal, show: false },
    }),

    uiLoadingShow: (previousUi: UiPayload) => ({
      ...previousUi,
      loading: true,
    }),
    uiLoadingClose: (previousUi: UiPayload) => ({
      ...previousUi,
      loading: false,
    }),

    uiPageCurrent: (previousUi: UiPayload, action: PayloadAction<number>) => ({
      ...previousUi,
      nav: {
        ...previousUi.nav,
        allSequencesPublic: {
          ...previousUi.nav.allSequencesPublic,
          pageCurrent: action.payload,
        },
      },
    }),
    uiPageNItems: (previousUi: UiPayload, action: PayloadAction<number>) => ({
      ...previousUi,
      nav: {
        ...previousUi.nav,
        allSequencesPublic: {
          ...previousUi.nav.allSequencesPublic,
          itemsTotal: action.payload,
        },
      },
    }),
    uiPageNavClose: (previousUi: UiPayload) => ({
      ...previousUi,
      nav: { ...previousUi.nav, show: false },
    }),
    uiPageNavShow: (previousUi: UiPayload) => ({
      ...previousUi,
      nav: { ...previousUi.nav, show: true },
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  uiModalShow: uiModalShowActionCreator,
  uiModalClose: uiModalCloseActionCreator,
  uiLoadingShow: uiLoadingShowActionCreator,
  uiLoadingClose: uiLoadingCloseActionCreator,
  uiPageCurrent: uiPageCurrentActionCreator,
  uiPageNavClose: uiPageNavCloseActionCreator,
  uiPageNavShow: uiPageNavShowActionCreator,
  uiPageNItems: uiPageNItemsActionCreator,
} = uiSlice.actions;
