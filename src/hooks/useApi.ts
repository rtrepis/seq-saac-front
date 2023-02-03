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
  uiPageNavCloseActionCreator,
  uiPageNavShowActionCreator,
  uiPageNItemsActionCreator,
} from "../app/slice/uiSlice";
import { ProtoSequences } from "../models/sequencesInterface";
import {
  createMessage,
  deleteSequenceIdMessage,
  errorMessage,
  notFoundSequencesMessage,
  updateSequenceIdMessage,
} from "../utils/modals";

const apiURL = process.env.REACT_APP_API_URL;

const useApi = () => {
  const dispatch = useDispatch();

  const getAllPublicSequences = useCallback(
    async (pageSize: number, pageCurrent: number): Promise<void> => {
      try {
        dispatch(loadSequencesActionCreator([]));
        dispatch(uiLoadingShowActionCreator());

        const {
          data: { sequences, count },
        } = await axios.get(
          `${apiURL}sequences/?pageSize=${pageSize}&page=${pageCurrent}`
        );

        dispatch(uiPageNItemsActionCreator(count));
        dispatch(loadSequencesActionCreator(sequences));
        dispatch(uiPageNavShowActionCreator());
      } catch {
        dispatch(uiModalShowActionCreator(errorMessage));
      }

      dispatch(uiLoadingCloseActionCreator());
    },
    [dispatch]
  );

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

  const putSequenceId = useCallback(
    async (id: string, dataToUpdateSequence: ProtoSequences): Promise<void> => {
      const token = localStorage.getItem("userToken");
      try {
        dispatch(uiLoadingShowActionCreator());

        await axios.put(
          `${apiURL}sequences/update/${id}`,
          dataToUpdateSequence,
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
      } catch {
        dispatch(uiModalShowActionCreator(errorMessage));
      }

      dispatch(uiLoadingCloseActionCreator());
      dispatch(uiModalShowActionCreator(updateSequenceIdMessage));
    },
    [dispatch]
  );

  const getSearchSequences = useCallback(
    async (word: string): Promise<void> => {
      try {
        dispatch(uiPageNavCloseActionCreator());
        dispatch(uiLoadingShowActionCreator());

        const {
          data: { sequences },
        } = await axios.get(`${apiURL}sequences/search/${word}`);

        sequences.length === 0
          ? dispatch(uiModalShowActionCreator(notFoundSequencesMessage))
          : dispatch(loadSequencesActionCreator(sequences));
      } catch {
        dispatch(uiModalShowActionCreator(errorMessage));
      }

      dispatch(uiLoadingCloseActionCreator());
    },
    [dispatch]
  );

  return {
    getAllPublicSequence: getAllPublicSequences,
    getSequencesOwner: getSequencesOwner,
    getSequenceId: getSequenceId,
    postCreateSequence: postCreateSequence,
    deleteSequenceId: deleteSequenceId,
    putSequenceId: putSequenceId,
    getSearchSequences: getSearchSequences,
  };
};

export default useApi;
