import { renderHook } from "@testing-library/react";
import axios from "axios";
import { loadSequencesActionCreator } from "../app/slice/sequencesSlice";
import { uiModalShowActionCreator } from "../app/slice/uiSlice";
import { Sequences } from "../models/sequencesInterface";
import Wrapper from "../utils/test/test-utils-WrapperProvaider";
import useApi from "./useApi";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.spyOn(Storage.prototype, "setItem");
Storage.prototype.setItem = jest.fn().mockReturnValue("ValidateToken");

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

  describe("When getSequenceOwner it's called with incorrect sequencesHook", () => {
    test("Then should it's called modelShow", async () => {
      axios.defaults.headers.get["Error"] = true;

      const sequencesHook = {};

      const { result } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await result.current.getSequencesOwner();
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
});
