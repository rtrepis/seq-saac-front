import { render, screen } from "../../utils/test-utils";
import ModalCenter from "./ModalCenter";
import userEvent from "@testing-library/user-event";

describe("Given a component ModalCenter", () => {
  describe("When rendered with propsType error and show true", () => {
    test("Then it displays the values ​​of the props", () => {
      const propsShow = true;
      const propsOnHide = jest.fn();
      const propsType = "error";
      const propsMessage = "Message Error";

      render(
        <ModalCenter
          message={propsMessage}
          onHide={propsOnHide}
          show={propsShow}
          type={propsType}
        />
      );
      const message = screen.getByText(propsMessage);

      expect(message).toBeInTheDocument();
    });
  });

  describe("When rendered with propsType ok and show true", () => {
    test("Then it displays the values ​​of the props", () => {
      const propsShow = true;
      const propsOnHide = jest.fn();
      const propsType = "ok";
      const propsMessage = "Message Ok";

      render(
        <ModalCenter
          message={propsMessage}
          onHide={propsOnHide}
          show={propsShow}
          type={propsType}
        />
      );
      const message = screen.getByText(propsMessage);

      expect(message).toBeInTheDocument();
    });
  });

  describe("When rendered and user click close", () => {
    test("Then it called propsOnHide", async () => {
      const propsShow = true;
      const propsOnHide = jest.fn();
      const propsType = "ok";
      const propsMessage = "";
      const expectButton = "X";

      render(
        <ModalCenter
          message={propsMessage}
          onHide={propsOnHide}
          show={propsShow}
          type={propsType}
        />
      );
      const button = screen.getByRole("button", { name: expectButton });
      await userEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(propsOnHide).toHaveBeenCalled();
    });
  });
});
