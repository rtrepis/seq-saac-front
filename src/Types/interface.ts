export interface ModalI {
  show: boolean;
  type: ModalType;
  message: string;
}

export interface NavI {
  allSequencesPage: number;
}

export interface UiPayload {
  modal: ModalI;
  loading: boolean;
  nav: NavI;
}

export type ModalType = "error" | "ok";

export type Pictogram = number;

export type Pictograms = Pictogram[];

export interface ISelectPictogram {
  pictogram: number;
  index: number;
}
