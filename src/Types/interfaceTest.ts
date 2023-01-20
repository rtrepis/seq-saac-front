import { SelectPictogram, Sequences } from "../models/sequencesInterface";
import { UserLogged } from "../models/userInterface";
import { ModalType, UiPayload } from "./interface";

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
    modal: {
      show: boolean;
      type: ModalType;
      message: string;
    };
    loading: boolean;
    nav: {
      allSequencesPage: number;
    };
  };
  sequence?: [
    {
      id: string;
      name: string;
      pictograms: number[];
      privately: boolean;
      owner: string;
    }
  ];
}

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export interface Store {
  user: UserLogged;
  ui: UiPayload;
  sequences: Sequences[];
  showPictograms: number[];
  selectPictograms: SelectPictogram[];
}
