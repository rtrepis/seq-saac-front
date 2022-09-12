import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadShowPictogramsActionCreator } from "../app/slice/showPictogramsSlice";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import { ModalPayload, Pictograms } from "../Types/interface";

const araSaacURL = process.env.REACT_APP_API_ARASAAC_URL;

const NotFoundMessage: ModalPayload = {
  show: true,
  message: "No hem trobat cap coincidència, prova un altre text",
  type: "ok",
};

const useAraSaac = () => {
  const dispatch = useDispatch();

  const getSearchPictogram = useCallback(
    async (word: string): Promise<void> => {
      try {
        const { data } = await axios.get(
          `${araSaacURL}pictograms/ca/search/${word}`
        );

        let pictogramsShow: Pictograms = [0];

        data.map((element: any) => pictogramsShow.push(element._id as number));

        pictogramsShow.shift();
        dispatch(loadShowPictogramsActionCreator(pictogramsShow as any));
      } catch {
        dispatch(uiModalShowActionCreator(NotFoundMessage));
      }
    },
    [dispatch]
  );

  return {
    getSearchPictogram: getSearchPictogram,
  };
};

export default useAraSaac;
