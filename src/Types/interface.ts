export interface Modal {
  show: boolean;
  type: ModalType;
  message: string;
}

export type ModalType = "error" | "ok";
