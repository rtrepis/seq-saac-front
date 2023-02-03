import { UiInitialState } from "../app/slice/uiSlice";
import { messageText } from "../language/ca";
import { UiPayload } from "../Types/interface";

export const errorMessage: UiPayload = {
  ...UiInitialState,
  modal: {
    show: true,
    message: messageText.errorServer,
    type: "error",
  },
};

export const createMessage: UiPayload = {
  ...UiInitialState,
  modal: {
    show: true,
    message: messageText.createSequence,
    type: "ok",
  },
};

export const deleteSequenceIdMessage: UiPayload = {
  ...UiInitialState,
  modal: {
    show: true,
    message: messageText.deleteSequenceId,
    type: "ok",
  },
};

export const updateSequenceIdMessage: UiPayload = {
  ...UiInitialState,
  modal: {
    show: true,
    message: messageText.upDateSequenceId,
    type: "ok",
  },
};

export const notFoundSequencesMessage: UiPayload = {
  ...UiInitialState,
  modal: {
    show: true,
    message: messageText.notFoundSequences,
    type: "ok",
  },
};
