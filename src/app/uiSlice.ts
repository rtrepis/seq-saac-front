import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal } from "../Types/interface";

export const modalInitialState: Modal = {
  show: false,
  type: "error",
  message: "Nom d'usuari o contrasenya invàlids",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: modalInitialState,
  reducers: {
    uiModalShow: (previousModal: Modal, action: PayloadAction<Modal>) =>
      action.payload,
    uiModalClose: (previousModal: Modal) => ({ ...previousModal, show: false }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  uiModalShow: uiModalShowActionCreator,
  uiModalClose: uiModalCloseActionCreator,
} = uiSlice.actions;
