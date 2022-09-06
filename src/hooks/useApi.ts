import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadSequenceActionCreator } from "../app/sequenceSlice";
import { uiModalShowActionCreator } from "../app/uiSlice";
import { ModalPayload, ModalType } from "../Types/interface";

const apiURL = process.env.REACT_APP_API_URL;

const useApi = () => {
  const dispatch = useDispatch();

  const getAllPublicSequence = useCallback(async (): Promise<void> => {
    const modalShow = (
      setShow: boolean,
      setMessage: string,
      setType: ModalType
    ) => {
      const modal: ModalPayload = {
        show: setShow,
        message: setMessage,
        type: setType,
      };

      dispatch(uiModalShowActionCreator(modal));
    };

    try {
      const {
        data: { sequences },
      } = await axios.get(`${apiURL}sequences/`);

      dispatch(loadSequenceActionCreator(sequences));
    } catch {
      modalShow(true, "Usuari o contrasenya invàlids", "error");
    }
  }, [dispatch]);
  return {
    getAllPublicSequence,
  };
};

export default useApi;
