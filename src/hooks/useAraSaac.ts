import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadShowPictogramsActionCreator } from "../app/slice/showPictogramsSlice";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import { ModalI, Pictograms } from "../Types/interface";

const araSaacURL = process.env.REACT_APP_API_ARASAAC_URL;

const NotFoundMessage: ModalI = {
  show: true,
  message: "No hem trobat cap coincidència, prova un altre text",
  type: "ok",
};

const ErrorServer: ModalI = {
  show: true,
  message: "Error en la lectura del servidor, intenta-ho més tard",
  type: "error",
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
        dispatch(loadShowPictogramsActionCreator(pictogramsShow as [number]));
      } catch {
        dispatch(uiModalShowActionCreator(NotFoundMessage));
      }
    },
    [dispatch]
  );

  const getWordPictogram = useCallback(
    async (pictogram: number) => {
      try {
        const { data } = await axios.get(
          `${araSaacURL}pictograms/ca/${pictogram}`
        );
        if (data !== undefined) {
          return (await data.keywords[0].keyword) as string;
        }
      } catch {
        dispatch(uiModalShowActionCreator(ErrorServer));
      }
      return "undefind";
    },
    [dispatch]
  );

  return {
    getSearchPictogram: getSearchPictogram,
    getWordPictogram: getWordPictogram,
  };
};

export default useAraSaac;
