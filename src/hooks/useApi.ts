import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadSequencesActionCreator } from "../app/slice/sequencesSlice";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import { ModalPayload, ModalType } from "../Types/interface";

const apiURL = process.env.REACT_APP_API_URL;

const useApi = () => {
  const dispatch = useDispatch();

  const getAllPublicSequences = useCallback(async (): Promise<void> => {
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

      dispatch(loadSequencesActionCreator(sequences));
    } catch {
      modalShow(
        true,
        "error en la lectura del servidor. Torna ha provar-ho més tard",
        "error"
      );
    }
  }, [dispatch]);

  const getSequencesOwner = useCallback(async (): Promise<void> => {
    debugger;

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
    const token = localStorage.getItem("userToken");
    try {
      const {
        data: { sequences },
      } = await axios.get(`${apiURL}sequences/owner`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const { sequencesCreate } = sequences;

      dispatch(loadSequencesActionCreator(sequencesCreate));
    } catch {
      modalShow(
        true,
        "error en la lectura del servidor. Torna ha provar-ho més tard",
        "error"
      );
    }
  }, [dispatch]);

  return {
    getAllPublicSequence: getAllPublicSequences,
    getSequencesOwner: getSequencesOwner,
  };
};

export default useApi;
