import { render, screen } from "../../utils/test/test-utils-Logout";
import NotFoundPage from "./NotFoundPage";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Give a page register form", () => {
  describe("When its rendering with title", () => {
    test("Then should show in document", () => {
      const expectTitle = "404: Pàgina web no trobada";

      render(<NotFoundPage />);
      const title = screen.getByText(expectTitle);

      expect(title).toBeInTheDocument();
    });
  });
  describe("When its rendering with button and user click", () => {
    test("Then should called navigate function", async () => {
      const expectButton = "Inici";

      render(<NotFoundPage />);
      const button = screen.getByText(expectButton);

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});
