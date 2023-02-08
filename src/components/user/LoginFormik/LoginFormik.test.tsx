import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../../../utils/test/test-utils-Logout";
import LoginFormik from "./LoginFormik";

const mockSubmit = jest.fn();

jest.mock("../../../hooks/useUser", () => () => ({
  postLogin: mockSubmit,
}));

describe("Give a component Login formik", () => {
  describe("When it's render", () => {
    test("Then should show all inputs expect", () => {
      const expectInputs = ["Usuari", "Contrasenya"];

      render(<LoginFormik />);
      const inputs: HTMLElement[] = [];
      expectInputs.forEach(
        (input, index) => (inputs[index] = screen.getByLabelText(input))
      );

      inputs.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
    });
  });

  describe("When it's user type in all inputs a valid string", () => {
    test("Then should submit form", async () => {
      const expectInputs = ["Usuari", "Contrasenya"];
      const typeUser = "UserTest";
      const typePassword = "1234";
      const expectSubmitButton = "Iniciar sessió";

      render(<LoginFormik />);
      const inputs: HTMLElement[] = [];
      expectInputs.forEach(
        (input, index) => (inputs[index] = screen.getByLabelText(input))
      );
      const button = screen.getByRole("button", { name: expectSubmitButton });

      await userEvent.type(inputs[0], typeUser);
      await userEvent.type(inputs[1], typePassword);
      await userEvent.click(button);

      expect(mockSubmit).toBeCalledWith({
        userName: typeUser,
        password: typePassword,
      });
    });
  });

  describe("When it's user type invalid string any inputs and changes focus", () => {
    test("Then should show message expect for each input", async () => {
      const expectInputs = ["Usuari", "Contrasenya"];
      const expectMessage = "Requrit min 3 caracters";
      const typeError = "Er";

      render(<LoginFormik />);
      const inputs: HTMLElement[] = [];
      expectInputs.forEach(
        (input, index) => (inputs[index] = screen.getByLabelText(input))
      );

      await userEvent.type(inputs[0], typeError);
      await userEvent.type(inputs[1], typeError);

      let message;
      await waitFor(() => {
        message = screen.getAllByText(expectMessage);
      });

      expect(message).toHaveLength(expectInputs.length);
    });
  });
});
