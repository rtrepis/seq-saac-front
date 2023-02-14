import { messageText } from "../language/ca";
import { ModalI } from "../Types/interface";

export const errorMessage: ModalI = {
  show: true,
  message: messageText.errorServer,
  type: "error",
};

export const createMessage: ModalI = {
  show: true,
  message: messageText.createSequence,
  type: "ok",
};

export const deleteSequenceIdMessage: ModalI = {
  show: true,
  message: messageText.deleteSequenceId,
  type: "ok",
};

export const updateSequenceIdMessage: ModalI = {
  show: true,
  message: messageText.upDateSequenceId,
  type: "ok",
};

export const notFoundSequencesMessage: ModalI = {
  show: true,
  message: messageText.notFoundSequences,
  type: "ok",
};
