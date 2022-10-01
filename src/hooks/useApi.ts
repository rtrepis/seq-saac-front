import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  deleteSequenceIdActionCreator,
  loadSequencesActionCreator,
} from "../app/slice/sequencesSlice";
import { loadShowPictogramsActionCreator } from "../app/slice/showPictogramsSlice";
import {
  uiLoadingCloseActionCreator,
  uiLoadingShowActionCreator,
  uiModalShowActionCreator,
} from "../app/slice/uiSlice";
import { ProtoSequences } from "../models/sequencesInterface";
import { UiPayload } from "../Types/interface";

const apiURL = process.env.REACT_APP_API_URL;

const errorMessage: UiPayload = {
  modal: {
    show: true,
    message: "error en la lectura del servidor. Torna ha provar-ho més tard",
    type: "error",
  },
  loading: false,
};

const createMessage: UiPayload = {
  modal: {
    show: true,
    message: "seqüència creada",
    type: "ok",
  },
  loading: false,
};

const deleteSequenceIdMessage: UiPayload = {
  modal: {
    show: true,
    message: "seqüència esborrada correctament",
    type: "ok",
  },
  loading: false,
};

const useApi = () => {
  const dispatch = useDispatch();

  const getAllPublicSequences = useCallback(async (): Promise<void> => {
    try {
      dispatch(loadSequencesActionCreator([]));
      dispatch(uiLoadingShowActionCreator());

      const {
        data: { sequences },
      } = await axios.get(`${apiURL}sequences/`);

      dispatch(loadSequencesActionCreator(sequences));
    } catch {
      dispatch(uiModalShowActionCreator(errorMessage));
    }

    dispatch(uiLoadingCloseActionCreator());
  }, [dispatch]);

  const getSequencesOwner = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem("userToken");

    try {
      dispatch(loadSequencesActionCreator([]));
      dispatch(uiLoadingShowActionCreator());

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

    dispatch(uiLoadingCloseActionCreator());
  }, [dispatch]);

  const getSequenceId = useCallback(
    async (id: string): Promise<void> => {
      const token = localStorage.getItem("userToken");

      try {
        dispatch(loadSequencesActionCreator([]));
        dispatch(uiLoadingShowActionCreator());

        const {
          data: { sequences },
        } = await axios.get(`${apiURL}sequences/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });

        const sequencesArray = [sequences];

        dispatch(loadSequencesActionCreator(sequencesArray));
      } catch {
        dispatch(uiModalShowActionCreator(errorMessage));
      }

      dispatch(uiLoadingCloseActionCreator());
    },
    [dispatch]
  );

  const postCreateSequence = useCallback(
    async (formSequenceData: ProtoSequences) => {
      const token = localStorage.getItem("userToken");

      try {
        dispatch(uiLoadingShowActionCreator());

        await axios.post(`${apiURL}sequences/create/`, formSequenceData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(loadShowPictogramsActionCreator([]));
        dispatch(uiModalShowActionCreator(createMessage));
      } catch (error) {
        dispatch(uiModalShowActionCreator(errorMessage));
      }

      dispatch(uiLoadingCloseActionCreator());
    },
    [dispatch]
  );

  const deleteSequenceId = useCallback(
    async (id: string): Promise<void> => {
      const token = localStorage.getItem("userToken");
      try {
        dispatch(uiLoadingShowActionCreator());

        await axios.delete(`${apiURL}sequences/delete/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
      } catch {
        dispatch(uiModalShowActionCreator(errorMessage));
      }

      dispatch(deleteSequenceIdActionCreator(id));
      dispatch(uiLoadingCloseActionCreator());
      dispatch(uiModalShowActionCreator(deleteSequenceIdMessage));
    },
    [dispatch]
  );

  return {
    getAllPublicSequence: getAllPublicSequences,
    getSequencesOwner: getSequencesOwner,
    getSequenceId: getSequenceId,
    postCreateSequence: postCreateSequence,
    deleteSequenceId: deleteSequenceId,
  };
};

export default useApi;
