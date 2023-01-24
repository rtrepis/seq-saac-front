import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SequencesI } from "../../models/sequencesInterface";
import { renderUser } from "../../utils/test/test-utils-Login";
import CreateSequenceForm from "./CreateSequenceForm";

const mockDispatch = jest.fn();
const mockPictograms = {
  showPictograms: [2, 5, 6],
  selectPictograms: [{ index: 1, pictogram: 1 }],
};
const mockApi = jest.fn();

const mockedUsedNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockPictograms,
  useApi: () => mockApi,
  useNavigate: () => mockedUsedNavigate,
}));

const mockPostCreate = jest.fn();

jest.mock("../../hooks/useApi", () => () => ({
  postCreateSequence: mockPostCreate,
  putSequenceId: mockPostCreate,
}));

beforeEach(() => jest.clearAllMocks());

describe("Give a CreateSequenceForm component", () => {
  describe("When its rendering with inputs name, privately, amountPictograms, button", () => {
    test("Then should show this component", () => {
      const labelName = "Nom";
      const labelPrivately = "Privada";
      const labelAmountPictograms = "Quantitat de pictogrames";

      renderUser(<CreateSequenceForm />);
      const name = screen.getByLabelText(labelName);
      const privatelySequence = screen.getByLabelText(labelPrivately);
      const amountPictograms = screen.getByLabelText(labelAmountPictograms);

      expect(name).toBeInTheDocument();
      expect(privatelySequence).toBeInTheDocument();
      expect(amountPictograms).toBeInTheDocument();
    });
  });

  describe("When user change amountPictgorams with + - buttons", () => {
    test("Then should show many buttons as amount pictograms", async () => {
      const labelAmountPictograms = "Quantitat de pictogrames";
      const amount = 4;

      renderUser(<CreateSequenceForm />);
      const amountPictograms = screen.getByRole("spinbutton", {
        name: labelAmountPictograms,
      });
      const restAmount = screen.getByRole("button", { name: "-" });
      const plusAmount = screen.getByRole("button", { name: "+" });

      await userEvent.type(amountPictograms, "3");
      await userEvent.click(plusAmount);
      await userEvent.click(restAmount);
      await userEvent.click(plusAmount);

      const button_1 = screen.getByRole("button", { name: "Pictograma 1" });
      const button = screen.getAllByRole("button");

      await userEvent.click(button_1);

      expect(button).toHaveLength(amount);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When user type name and checked privately", () => {
    test("Then should show changes in form", async () => {
      const textType = "New name sequence";

      const labelName = "Nom";
      const labelPrivately = "Privada";

      renderUser(<CreateSequenceForm />);

      const name = screen.getByLabelText(labelName);
      const privatelyInput = screen.getByLabelText(labelPrivately);

      await userEvent.type(name, textType);
      await userEvent.click(privatelyInput);

      expect(name).toHaveValue(textType);
      expect(privatelyInput).toBeChecked();
    });
  });

  describe("When user completed form can click submit", () => {
    test("Then should called postCreate function", async () => {
      const expectSubmitButton = "Desar la seqüència";

      renderUser(<CreateSequenceForm />);

      const submit = screen.getByRole("button", { name: expectSubmitButton });

      await userEvent.click(submit);

      expect(mockPostCreate).toHaveBeenCalled();
    });
  });

  describe("When props received data sequence", () => {
    const mockSequenceProps: SequencesI = {
      id: "idMock",
      name: "nameMock",
      pictograms: [0],
      owner: "idOwnerMock",
      privately: true,
    };
    test("Then should show data in inputs form and call", () => {
      const nameLabel = "Nom";
      const privatelyLabel = "Privada";

      renderUser(<CreateSequenceForm sequence={mockSequenceProps} />);
      const nameInput = screen.getByRole("textbox", { name: nameLabel });
      const privatelyCheck = screen.getByRole("checkbox", {
        name: privatelyLabel,
      });

      expect(nameInput).toHaveValue(mockSequenceProps.name);
      expect(privatelyCheck).toBeChecked();
    });

    test("Then should user can submit putSequenceId function call", async () => {
      const expectSubmitButton = "Desar la seqüència";

      renderUser(<CreateSequenceForm sequence={mockSequenceProps} />);
      const submit = screen.getByRole("button", { name: expectSubmitButton });

      await userEvent.click(submit);

      expect(mockPostCreate).toHaveBeenCalled();
    });
  });
});
