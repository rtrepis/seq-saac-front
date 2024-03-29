export interface ModalI {
  show: boolean;
  type: ModalType;
  message: string;
}

export interface SequencesNavPageI {
  itemsTotal: number;
  pageCurrent: number;
}

export interface UiPayload {
  modal: ModalI;
  loading: boolean;
  nav: {
    show: boolean;
    allSequencesPublic: SequencesNavPageI;
  };
}

export type ModalType = "error" | "ok";

export type Pictogram = number;

export type Pictograms = Pictogram[];

export interface ISelectPictogram {
  pictogram: number;
  index: number;
}
