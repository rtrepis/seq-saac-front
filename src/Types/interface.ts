export interface ModalPayload {
  show: boolean;
  type: ModalType;
  message: string;
}

export type ModalType = "error" | "ok";

export type Pictogram = number;

export type Pictograms = Pictogram[];

export interface SelectPictogram {
  pictogram: number;
  index: number;
}
