import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiPayload } from "../../Types/interface";

export const UiInitialState: UiPayload = {
  modal: { show: false, type: "ok", message: "" },
  loading: false,
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
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  uiModalShow: uiModalShowActionCreator,
  uiModalClose: uiModalCloseActionCreator,
  uiLoadingShow: uiLoadingShowActionCreator,
  uiLoadingClose: uiLoadingCloseActionCreator,
} = uiSlice.actions;
