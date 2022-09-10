import { ModalType } from "./interface";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export interface PreloadedState {
  user?: {
    id: string;
    userName: string;
    token: string;
  };
  ui?: {
    show: boolean;
    type: ModalType;
    message: string;
  };
  sequence?: [
    {
      id: string;
      name: string;
      pictograms: number[];
      private: boolean;
      owner: string;
    }
  ];
}

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
