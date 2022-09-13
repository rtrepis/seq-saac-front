import { renderHook } from "../utils/test/test-utils-Loggin";
import Wrapper from "../utils/test/test-utils-WrapperProvaider";
import useAraSaac from "./useAraSaac";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

beforeEach(() => jest.clearAllMocks());

describe("Given a useAraSacc hook", () => {
  describe("When getSearchPictogram it's called with search wordMock", () => {
    test("Then should return Pictograms array", async () => {
      const wordSearchMock = "Pa";
      const showPictogramsHook = {
        payload: [234, 567],
        type: "showPictograms/loadShowPictograms",
      };
      const { result } = renderHook(() => useAraSaac(), { wrapper: Wrapper });

      await result.current.getSearchPictogram(wordSearchMock);

      expect(mockDispatch).toHaveBeenCalledWith(showPictogramsHook);
    });
  });

  describe("When getSearchPictogram it's called without  wordMock", () => {
    test("Then should return Pictograms array", async () => {
      const wordSearchMock = "";
      const expectModal = {
        payload: {
          message: "No hem trobat cap coincidència, prova un altre text",
          show: true,
          type: "ok",
        },
        type: "ui/uiModalShow",
      };
      const { result } = renderHook(() => useAraSaac(), { wrapper: Wrapper });

      await result.current.getSearchPictogram(wordSearchMock);

      expect(mockDispatch).toHaveBeenCalledWith(expectModal);
    });
  });
});
