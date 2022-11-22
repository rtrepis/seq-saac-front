import { render, screen } from "../../utils/test/test-utils-Logout";
import ValidateEmailPage from "./ValidateEmailPage";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useParams: () => {
    "mockConfirmationCode";
  },
}));

const mockGetConfirmationCode = jest.fn();

jest.mock("../../hooks/useUser", () => () => ({
  getConfirmationCode: mockGetConfirmationCode,
}));

describe("Give a component ValidateEmailPage", () => {
  describe("When we have and validate message", () => {
    test("Then we expect in the document", () => {
      const message = "Validant correu electrònic...";

      render(<ValidateEmailPage />);

      const text = screen.getByText(message);

      expect(text).toBeInTheDocument();
    });
  });
});
