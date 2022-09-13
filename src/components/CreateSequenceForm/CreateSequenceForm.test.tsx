import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateSequenceForm from "./CreateSequenceForm";

const mockDispatch = jest.fn();
const mockPictograms = { showPictograms: [2, 5, 6] };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockPictograms,
}));

describe("Give a CreateSequenceForm component", () => {
  describe("When its rendering with inputs name, private, amountPictograms, button", () => {
    test("Then should show this component", () => {
      const labelName = "Nom";
      const labelPrivate = "Privada";
      const labelAmountPictograms = "Quantitat de pictogrames";

      render(<CreateSequenceForm />);
      const name = screen.getByLabelText(labelName);
      const privateSequence = screen.getByLabelText(labelPrivate);
      const amountPictograms = screen.getByLabelText(labelAmountPictograms);

      expect(name).toBeInTheDocument();
      expect(privateSequence).toBeInTheDocument();
      expect(amountPictograms).toBeInTheDocument();
    });
  });
  describe("When user change amountPictgorams", () => {
    test("Then should show many buttons as amount pictograms", async () => {
      const labelAmountPictograms = "Quantitat de pictogrames";
      const amount = 3;

      render(<CreateSequenceForm />);
      const amountPictograms = screen.getByRole("spinbutton", {
        name: labelAmountPictograms,
      });

      await userEvent.type(amountPictograms, "3");
      const button = screen.getAllByRole("button");

      expect(button).toHaveLength(amount);
    });
  });
});
