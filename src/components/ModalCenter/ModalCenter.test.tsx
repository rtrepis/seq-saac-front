import { render, screen } from "../../utils/test/test-utils-Loggout";
import ModalCenter from "./ModalCenter";
import userEvent from "@testing-library/user-event";
import { uiModalCloseActionCreator } from "../../app/slice/uiSlice";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a component ModalCenter", () => {
  const propsShow = true;
  describe("When rendered with propsType errorModal and show true", () => {
    test("Then it displays component with massage error", () => {
      const propsType = "error";
      const propsMessage = "Message Error";

      render(
        <ModalCenter message={propsMessage} show={propsShow} type={propsType} />
      );
      const message = screen.getByText(propsMessage);

      expect(message).toBeInTheDocument();
    });
  });

  describe("When rendered with propsType okModal and show true", () => {
    test("Then it displays component with message ok", () => {
      const propsType = "ok";
      const propsMessage = "Message Ok";

      render(
        <ModalCenter message={propsMessage} show={propsShow} type={propsType} />
      );
      const message = screen.getByText(propsMessage);

      expect(message).toBeInTheDocument();
    });
  });

  describe("When rendered and user click close", () => {
    test("Then it call propsOnHide", async () => {
      const propsType = "ok";
      const propsMessage = "";
      const expectButton = "X";

      render(
        <ModalCenter message={propsMessage} show={propsShow} type={propsType} />
      );
      const button = screen.getByRole("button", { name: expectButton });
      await userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalledWith(uiModalCloseActionCreator());
    });
  });
});
