export interface UiPayload {
  modal: {
    show: boolean;
    type: ModalType;
    message: string;
  };
  loading: boolean;
}

export type ModalType = "error" | "ok";

export type Pictogram = number;

export type Pictograms = Pictogram[];

export interface ISelectPictogram {
  pictogram: number;
  index: number;
}
