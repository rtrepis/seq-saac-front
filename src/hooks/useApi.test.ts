import { renderHook } from "../utils/test/test-utils-Login";
import axios from "axios";
import { loadSequencesActionCreator } from "../app/slice/sequencesSlice";
import { ProtoSequences, SequencesI } from "../models/sequencesInterface";
import useApi from "./useApi";
import Wrapper from "../utils/test/test-utils-WrapperProvaider";
import { previousUiPayload } from "../utils/test/payloads/previousUiPayload";

const mockDispatch = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => jest.clearAllMocks());

describe("Given a useApi hook", () => {
  describe("When getAllPublicSequence it's called with correct sequencesHook", () => {
    test("Then should return sequences array", async () => {
      const sequencesHook = {
        payload: [
          {
            id: "",
            name: "",
            pictograms: [0, 1],
            privately: true,
            owner: "235",
          },
        ],
        type: "sequences/loadSequences",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.getAllPublicSequence(2, 0);

      expect(mockDispatch).toHaveBeenCalledWith(sequencesHook);
    });
  });

  describe("When getSequenceOwner it's called with header correct", () => {
    test("Then should it's called dispatch with payload", async () => {
      const payloadHook = {
        payload: [
          {
            id: "345",
            name: "owner",
            owner: "235",
            pictograms: [0, 1],
            privately: true,
          },
        ],
        type: "sequences/loadSequences",
      };

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequencesOwner();

      expect(mockDispatch).toHaveBeenCalledWith(payloadHook);
    });
  });

  describe("When getAllPublicSequence it's called with incorrect sequencesHook", () => {
    test("Then should it's called modelShow", async () => {
      axios.defaults.headers.get["Error"] = true;
      const sequencesHook = {};
      const expectPayLoadModalShow = {
        payload: {
          ...previousUiPayload,
          modal: {
            message:
              "error en la lectura del servidor. Torna ha provar-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getAllPublicSequence(2, 0);
      await loadSequencesActionCreator(sequencesHook as SequencesI[]);

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When getSequenceOwner it's called with incorrect header", () => {
    test("Then should it's called modelShow", async () => {
      axios.defaults.headers.get["Error"] = true;
      const sequencesHook = [
        { id: "", name: "", owner: "", pictograms: [0], privately: false },
      ];
      const expectPayLoadModalShow = {
        payload: {
          ...previousUiPayload,
          modal: {
            message:
              "error en la lectura del servidor. Torna ha provar-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequencesOwner();
      await loadSequencesActionCreator(sequencesHook);

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When getSequence it's called with id correct", () => {
    test("Then should return sequences array", async () => {
      const idCorrect = "63199e9c8aa067d2f0931a4e";
      const payloadExpect = {
        payload: [
          [
            {
              id: "63199e9c8aa067d2f0931a4e",
              name: "",
              owner: "235",
              pictograms: [0, 1],
              privately: true,
            },
          ],
        ],
        type: "sequences/loadSequences",
      };

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequenceId(idCorrect);

      expect(mockDispatch).toHaveBeenCalledWith(payloadExpect);
    });
  });

  describe("When getSequence caller id incorrect", () => {
    test("Then should it's called modelShow", async () => {
      const idCorrect = "63199e9";
      const expectPayLoadModalShow = {
        payload: {
          ...previousUiPayload,
          modal: {
            message:
              "error en la lectura del servidor. Torna ha provar-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequenceId(idCorrect);

      expect(mockDispatch).toHaveBeenCalledWith(expectPayLoadModalShow);
    });
  });

  describe("When postCreateSequences it's called with sequence error", () => {
    test("Then should return modal error", async () => {
      axios.defaults.headers.get["Error"] = true;

      const sequenceCreateMock = {
        name: "",
        pictograms: [1, 2],
        privately: false,
      };
      const expectModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message:
              "error en la lectura del servidor. Torna ha provar-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.postCreateSequence(sequenceCreateMock);

      expect(mockDispatch).toHaveBeenCalledWith(expectModal);
    });
  });

  describe("When postCreateSequences it's called with sequence correct", () => {
    test("Then should return modal ok create", async () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwODYxYzk5MGM3MDlhNmNlYjk0NWQiLCJ1c2VyTmFtZSI6InRlc3RpbmciLCJpYXQiOjE2NjIxMzk1Mzd9.EKxxxoIKOLRRPDR4Uuh-_QmFM8khGF4_-mxbIxjrOpE";

      window.localStorage.setItem("userToken", mockToken);

      const sequenceCreateMock = {
        name: "Test Name",
        pictograms: [1, 2],
        privately: false,
      };
      const expectModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message: "seqüència creada",
            show: true,
            type: "ok",
          },
        },
        type: "ui/uiModalShow",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.postCreateSequence(sequenceCreateMock);

      expect(mockDispatch).toHaveBeenCalledWith(expectModal);
    });
  });

  describe("When deleteSequenceId it's called with string id, owner correct, privately true", () => {
    test("Then should called dispatch expectDispatch", async () => {
      const mockToken = "token";
      window.localStorage.setItem("userToken", mockToken);

      const expectDispatch = {
        payload: "mockId",
        type: "sequences/deleteSequenceId",
      };

      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.deleteSequenceId("mockId");

      expect(mockDispatch).toHaveBeenCalledWith(expectDispatch);
    });
  });

  describe("When deleteSequenceId it's called with string error", () => {
    test("Then should called dispatch modal error", async () => {
      const mockToken = "token";
      window.localStorage.setItem("userToken", mockToken);

      const expectDispatchModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message:
              "error en la lectura del servidor. Torna ha provar-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.deleteSequenceId("mockIdError");

      expect(mockDispatch).toHaveBeenCalledWith(expectDispatchModal);
    });
  });

  describe("When putSequenceId it's called with sequence and owner correct", () => {
    test("Then should called dispatch expect modal ok", async () => {
      const mockToken = "tokenMock";
      window.localStorage.setItem("userToken", mockToken);
      const mockDataToUpdateSequence: ProtoSequences = {
        name: "UpdateName",
        pictograms: [2],
        privately: false,
      };
      const expectDispatchModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message: "seqüència editada correctament",
            show: true,
            type: "ok",
          },
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });
      await result.current.putSequenceId("mockId", mockDataToUpdateSequence);

      expect(mockDispatch).toHaveBeenCalledWith(expectDispatchModal);
    });
  });

  describe("When putSequenceId it's called with sequence error", () => {
    test("Then should called dispatch modal error", async () => {
      const mockToken = "token";
      window.localStorage.setItem("userToken", mockToken);

      const mockDataToUpdateSequence: ProtoSequences = {
        name: "",
        pictograms: [2],
        privately: false,
      };

      const expectDispatchModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message:
              "error en la lectura del servidor. Torna ha provar-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.putSequenceId(
        "mockIdError",
        mockDataToUpdateSequence
      );

      expect(mockDispatch).toHaveBeenCalledWith(expectDispatchModal);
    });
  });

  describe("When getSearchSequences it's called with word", () => {
    test("Then should called dispatch expectDispatch", async () => {
      const sequencesMock = [
        {
          id: "",
          name: "",
          pictograms: [0, 1],
          privately: true,
          owner: "235",
        },
      ];
      const expectDispatch = {
        payload: sequencesMock,
        type: "sequences/loadSequences",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.getSearchSequences("mockWord");

      expect(mockDispatch).toHaveBeenCalledWith(expectDispatch);
    });
  });

  describe("When getSearchSequences it's called with word and empty result", () => {
    test("Then should called dispatch expectDispatch", async () => {
      const expectDispatchModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message: "No s'ha trobat cap seqüència, prova una altra text",
            show: true,
            type: "ok",
          },
        },
        type: "ui/uiModalShow",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.getSearchSequences("asdfadsf");

      expect(mockDispatch).toHaveBeenCalledWith(expectDispatchModal);
    });
  });

  describe("When getSearchSequences it's called with invalid word", () => {
    test("Then should called dispatch expectDispatch", async () => {
      const expectDispatchModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message:
              "error en la lectura del servidor. Torna ha provar-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.getSearchSequences("%");

      expect(mockDispatch).toHaveBeenCalledWith(expectDispatchModal);
    });
  });
});
