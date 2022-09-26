import App from "./App";
import { renderUser } from "./utils/test/test-utils-Loggin";

const mockDispatch = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => jest.clearAllMocks());

describe("Given a App component", () => {
  describe("When user is not logged", () => {
    test("Then should called dispatch", () => {
      renderUser(<App />);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When user is logged", () => {
    test("Then should called dispatch", () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwODYxYzk5MGM3MDlhNmNlYjk0NWQiLCJ1c2VyTmFtZSI6InRlc3RpbmciLCJpYXQiOjE2NjIxMzk1Mzd9.EKxxxoIKOLRRPDR4Uuh-_QmFM8khGF4_-mxbIxjrOpE";
      window.localStorage.setItem("userToken", mockToken);

      renderUser(<App />);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
