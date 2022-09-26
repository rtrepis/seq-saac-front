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

export interface SelectPictogram {
  pictogram: number;
  index: number;
}
