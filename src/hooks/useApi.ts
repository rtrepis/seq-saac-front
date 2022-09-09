import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadSequencesActionCreator } from "../app/slice/sequencesSlice";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import { ModalPayload } from "../Types/interface";

const apiURL = process.env.REACT_APP_API_URL;

const errorMessage: ModalPayload = {
  show: true,
  message: "error en la lectura del servidor. Torna ha provar-ho més tard",
  type: "error",
};

const useApi = () => {
  const dispatch = useDispatch();

  const getAllPublicSequences = useCallback(async (): Promise<void> => {
    try {
      const {
        data: { sequences },
      } = await axios.get(`${apiURL}sequences/`);

      dispatch(loadSequencesActionCreator(sequences));
    } catch {
      dispatch(uiModalShowActionCreator(errorMessage));
    }
  }, [dispatch]);

  const getSequencesOwner = useCallback(async (): Promise<void> => {
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
      dispatch(uiModalShowActionCreator(errorMessage));
    }
  }, [dispatch]);

  return {
    getAllPublicSequence: getAllPublicSequences,
    getSequencesOwner: getSequencesOwner,
  };
};

export default useApi;
