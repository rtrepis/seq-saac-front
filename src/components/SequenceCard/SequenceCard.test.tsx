import { render, screen } from "@testing-library/react";
import SequenceCard from "./SequenceCard";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Give a component SequenceCard", () => {
  describe("When rendered it should", () => {
    test("Then display title pictograms and link navegate", async () => {
      const expectTitle = "Rentar mans";
      const expectImages = "pictograma";
      const expectPictogramsArray = [11737, 8975, 35729, 35729];
      const expectId = "63199e9c8aa067d2f0931a4e";

      render(
        <SequenceCard
          name={expectTitle}
          pictograms={expectPictogramsArray}
          id={expectId}
        />
      );
      const title = screen.getByRole("heading", { name: expectTitle });
      const image = screen.getAllByRole("img", { name: expectImages });
      const link = screen.getByRole("button", {
        name: `${expectTitle} ${expectImages} ${expectImages} ${expectImages}`,
      });

      await userEvent.click(link);

      expect(link).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(image).toHaveLength(3);
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
