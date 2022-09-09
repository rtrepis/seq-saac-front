import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload } from "../../Types/interface";

export const modalInitialState: ModalPayload = {
  show: false,
  type: "ok",
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: modalInitialState,
  reducers: {
    uiModalShow: (
      previousModal: ModalPayload,
      action: PayloadAction<ModalPayload>
    ) => action.payload,
    uiModalClose: (previousModal: ModalPayload) => ({
      ...previousModal,
      show: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  uiModalShow: uiModalShowActionCreator,
  uiModalClose: uiModalCloseActionCreator,
} = uiSlice.actions;
