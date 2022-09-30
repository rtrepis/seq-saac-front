import { screen } from "@testing-library/react";
import SequenceCard from "./SequenceCard";
import userEvent from "@testing-library/user-event";
import { renderUser } from "../../utils/test/test-utils-Login";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockDeleteSequenceId = jest.fn();

jest.mock("../../hooks/useApi", () => () => ({
  deleteSequenceId: mockDeleteSequenceId,
}));

describe("Give a component SequenceCard", () => {
  const expectTitle = "Rentar mans";
  const expectPictogramsArray = [11737, 8975, 35729, 35729];
  const expectId = "63199e9c8aa067d2f0931a4e";
  describe("When rendered it should", () => {
    test("Then display title pictograms and link navegate", async () => {
      const expectImages = "pictograma";

      renderUser(
        <SequenceCard
          name={expectTitle}
          pictograms={expectPictogramsArray}
          id={expectId}
        />
      );
      const title = screen.getByRole("heading", { name: expectTitle });
      const image = screen.getAllByRole("img", { name: expectImages });
      const link = screen.getByRole("button", { name: expectTitle });
      const linkImages = screen.getByRole("button", {
        name: `${expectImages} ${expectImages} ${expectImages}`,
      });

      await userEvent.click(link);
      await userEvent.click(linkImages);

      expect(link).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(image).toHaveLength(3);
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When sequence is privately", () => {
    test("Then should show and user can click action", async () => {
      const expectTrashIcon = "";
      const privatelySequence = true;

      renderUser(
        <SequenceCard
          name={expectTitle}
          pictograms={expectPictogramsArray}
          id={expectId}
          privately={privatelySequence}
          owner={true}
        />
      );
      const iconTrash = screen.getByRole("button", { name: expectTrashIcon });

      await userEvent.click(iconTrash);

      expect(iconTrash).toBeInTheDocument();
      expect(mockDeleteSequenceId).toHaveBeenCalled();
    });
  });
});
