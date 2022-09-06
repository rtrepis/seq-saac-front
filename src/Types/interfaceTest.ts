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
}

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
