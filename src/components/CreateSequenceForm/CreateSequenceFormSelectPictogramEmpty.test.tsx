import { render, screen } from "@testing-library/react";
import CreateSequenceForm from "./CreateSequenceForm";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();
const mockPictograms = {
  showPictograms: [],
  selectPictograms: [],
};
const mockApi = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockPictograms,
  useApi: () => mockApi,
}));

const mockPostCreate = jest.fn();

jest.mock("../../hooks/useApi", () => () => ({
  postCreateSequence: mockPostCreate,
}));

beforeEach(() => jest.clearAllMocks());

describe("Give a CreateSequenceForm component", () => {
  describe("When user change amountPictgorams and selecPictogram array is empty", () => {
    test("Then should show many buttons as amount pictograms", async () => {
      const labelAmountPictograms = "Quantitat de pictogrames";

      render(<CreateSequenceForm />);
      const amountPictograms = screen.getByRole("spinbutton", {
        name: labelAmountPictograms,
      });
      const plusAmount = screen.getByRole("button", { name: "+" });

      await userEvent.type(amountPictograms, "3");
      await userEvent.click(plusAmount);

      const button_1 = screen.getByRole("button", { name: "Pictograma 1" });

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
