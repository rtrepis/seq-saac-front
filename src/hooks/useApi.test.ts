import { renderHook } from "../utils/test/test-utils-Loggin";
import axios from "axios";
import { loadSequencesActionCreator } from "../app/slice/sequencesSlice";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import { SequenceInitialState, Sequences } from "../models/sequencesInterface";
import useApi from "./useApi";
import Wrapper from "../utils/test/test-utils-WrapperProvaider";

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
            pictograms: [0, 0],
            private: true,
            owner: "235",
          },
        ],
        type: "sequences/loadSequences",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.getAllPublicSequence();

      expect(mockDispatch).toHaveBeenCalledWith(sequencesHook);
    });
  });

  describe("When getSequenceOwner it's called with header correct", () => {
    test("Then should it's called dispath with payload", async () => {
      const payloadHook = {
        payload: [
          {
            id: "345",
            name: "owner",
            owner: "235",
            pictograms: [0, 0],
            private: true,
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

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getAllPublicSequence();
      await loadSequencesActionCreator(sequencesHook as Sequences[]);

      expect(mockDispatch).toHaveBeenCalledWith(
        uiModalShowActionCreator({
          message:
            "error en la lectura del servidor. Torna ha provar-ho més tard",
          show: true,
          type: "error",
        })
      );
    });
  });

  describe("When getSequenceOwner it's called with incorrect header", () => {
    test("Then should it's called modelShow", async () => {
      axios.defaults.headers.get["Error"] = true;

      const sequencesHook: SequenceInitialState = [
        { id: "", name: "", owner: "", pictograms: [0], private: false },
      ];

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequencesOwner();
      await loadSequencesActionCreator(sequencesHook);

      expect(mockDispatch).toHaveBeenCalledWith(
        uiModalShowActionCreator({
          message:
            "error en la lectura del servidor. Torna ha provar-ho més tard",
          show: true,
          type: "error",
        })
      );
    });
  });

  describe("When getSequence it's called with id correct", () => {
    test("Then should return sequences array", async () => {
      const idCorrect = "63199e9c8aa067d2f0931a4e";
      const peyloadExpect = {
        payload: [
          [
            {
              id: "63199e9c8aa067d2f0931a4e",
              name: "",
              owner: "235",
              pictograms: [0, 0],
              private: true,
            },
          ],
        ],
        type: "sequences/loadSequences",
      };

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequence(idCorrect);

      expect(mockDispatch).toHaveBeenCalledWith(peyloadExpect);
    });
  });

  describe("When getSequence caller id incorrect", () => {
    test("Then should it's called modelShow", async () => {
      const idCorrect = "63199e9";

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequence(idCorrect);

      expect(mockDispatch).toHaveBeenCalledWith(
        uiModalShowActionCreator({
          message:
            "error en la lectura del servidor. Torna ha provar-ho més tard",
          show: true,
          type: "error",
        })
      );
    });
  });

  describe("When postCreateSequences it's called with sequence error", () => {
    test("Then should return modal ok create", async () => {
      axios.defaults.headers.get["Error"] = true;

      const sequenceCreateMock = {
        name: "",
        pictograms: [1, 2],
        private: false,
      };
      const expectModal = {
        payload: {
          message:
            "error en la lectura del servidor. Torna ha provar-ho més tard",
          show: true,
          type: "error",
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.postCreateSequence(sequenceCreateMock);

      expect(mockDispatch).toHaveBeenCalledWith(expectModal);
    });
  });

  describe("When postCreateSequences it's called with sequence corret", () => {
    test("Then should return modal ok create", async () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwODYxYzk5MGM3MDlhNmNlYjk0NWQiLCJ1c2VyTmFtZSI6InRlc3RpbmciLCJpYXQiOjE2NjIxMzk1Mzd9.EKxxxoIKOLRRPDR4Uuh-_QmFM8khGF4_-mxbIxjrOpE";

      window.localStorage.setItem("userToken", mockToken);

      const sequenceCreateMock = {
        name: "Test Name",
        pictograms: [1, 2],
        private: false,
      };
      const expectModal = {
        payload: {
          message: "seqüència creada",
          show: true,
          type: "ok",
        },
        type: "ui/uiModalShow",
      };
      const { result } = renderHook(() => useApi(), { wrapper: Wrapper });

      await result.current.postCreateSequence(sequenceCreateMock);

      expect(mockDispatch).toHaveBeenCalledWith(expectModal);
    });
  });
});
