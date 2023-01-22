import { previousUiPayload } from "../utils/test/payloads/previousUiPayload";
import { renderHook } from "../utils/test/test-utils-Login";
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
    test("Then should return message error", async () => {
      const wordSearchMock = "";
      const expectModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message: "No hem trobat cap coincidència, prova un altre text",
            show: true,
            type: "ok",
          },
        },
        type: "ui/uiModalShow",
      };
      const { result } = renderHook(() => useAraSaac(), { wrapper: Wrapper });

      await result.current.getSearchPictogram(wordSearchMock);

      expect(mockDispatch).toHaveBeenCalledWith(expectModal);
    });
  });

  describe("When getWordPictogram it's called with mockNumberPictogram", () => {
    test("Then should return word this pictogram", async () => {
      const mockNumberPictogram = 1234;
      const expectReturnMockWord = "WordPictogram-1234";

      const { result } = renderHook(() => useAraSaac(), { wrapper: Wrapper });

      const returnWord = await result.current.getWordPictogram(
        mockNumberPictogram
      );

      expect(returnWord).toBe(expectReturnMockWord);
    });
  });

  describe("When getWordPictogram it's called without mockNumberPictogram", () => {
    test("Then should return message error", async () => {
      const mockNumberPictogram = NaN;
      const expectModal = {
        payload: {
          ...previousUiPayload,
          modal: {
            message: "Error en la lectura del servidor, intenta-ho més tard",
            show: true,
            type: "error",
          },
        },
        type: "ui/uiModalShow",
      };

      const { result } = renderHook(() => useAraSaac(), { wrapper: Wrapper });
      await result.current.getWordPictogram(mockNumberPictogram);

      expect(mockDispatch).toHaveBeenCalledWith(expectModal);
    });
  });
});
