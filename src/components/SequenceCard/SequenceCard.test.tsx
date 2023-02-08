import { screen } from "@testing-library/react";
import SequenceCard from "./SequenceCard";
import userEvent from "@testing-library/user-event";
import { renderUser } from "../../utils/test/test-utils-Login";
import { SequencesI } from "../../models/sequencesInterface";

const mockDeleteSequenceId = jest.fn();

jest.mock("../../hooks/useApi", () => () => ({
  deleteSequenceId: mockDeleteSequenceId,
}));

describe("Give a component SequenceCard", () => {
  const mockSequenceArray: SequencesI = {
    name: "Rentar mans",
    pictograms: [11737, 8975, 35729, 2443, 11739],
    id: "63178389ff5c3af56def73b4",
    owner: "",
    privately: false,
  };

  describe("When rendered it should", () => {
    test("Then display title pictograms and link navegate", async () => {
      const expectImages = "pictograma";

      renderUser(<SequenceCard sequence={mockSequenceArray} />);
      const title = screen.getByRole("heading", {
        name: mockSequenceArray.name,
      });
      const image = screen.getAllByRole("img", { name: expectImages });
      const link = screen.getByRole("link", { name: mockSequenceArray.name });
      const linkImages = screen.getByRole("link", {
        name: `${expectImages} ${expectImages} ${expectImages}`,
      });

      await userEvent.click(link);
      await userEvent.click(linkImages);

      expect(link).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(image).toHaveLength(3);
    });
  });

  describe("When sequence is privately", () => {
    test("Then should show and user can click action", async () => {
      const expectTrashIcon = "Brosa per borrar la seqüència";
      mockSequenceArray.privately = true;

      renderUser(<SequenceCard sequence={mockSequenceArray} isOwner={true} />);
      const iconTrash = screen.getByText(expectTrashIcon);

      await userEvent.click(iconTrash);

      expect(iconTrash).toBeInTheDocument();
      expect(mockDeleteSequenceId).toHaveBeenCalled();
    });
  });

  describe("When user register is mySequencePage", () => {
    test("Then should show pen and user can click action", async () => {
      const expectPenIcon = "Llapis per editar la seqüència";
      mockSequenceArray.privately = false;

      renderUser(<SequenceCard sequence={mockSequenceArray} isOwner={true} />);
      const iconPen = screen.getByText(expectPenIcon);

      await userEvent.click(iconPen);

      expect(iconPen).toBeInTheDocument();
    });
  });

  describe("When rendered footer", () => {
    test("Then should show display how many pictograms", () => {
      const expectNumberPictograms = mockSequenceArray.pictograms.length;
      const expectText = "Nº pictogrames : " + expectNumberPictograms;

      renderUser(<SequenceCard sequence={mockSequenceArray} />);
      const text = screen.getByText(expectText);

      expect(text).toBeInTheDocument();
    });
  });
});
