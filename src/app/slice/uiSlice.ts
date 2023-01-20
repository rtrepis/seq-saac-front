import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavI, UiPayload } from "../../Types/interface";

export const UiInitialState: UiPayload = {
  modal: { show: false, type: "ok", message: "" },
  loading: false,
  nav: {
    show: true,
    allSequencesPage: 0,
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

    uiPageCurrent: (previousUi: UiPayload, action: PayloadAction<NavI>) => ({
      ...previousUi,
      nav: action.payload,
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
} = uiSlice.actions;
