import { render, screen } from "@testing-library/react";
import SequenceCard from "./SequenceCard";

describe("Give a component SequenceCard", () => {
  describe("When rendered it should", () => {
    test("Then display title", () => {
      const expectTitle = "Rentar mans";
      const expectImages = "obrir l'aixta";
      const expectPictogramsArray = [11737, 8975, 35729, 35729];

      render(
        <SequenceCard name={expectTitle} pictograms={expectPictogramsArray} />
      );
      const title = screen.getByRole("heading", { name: expectTitle });
      const image = screen.getAllByRole("img", { name: expectImages });

      expect(title).toBeInTheDocument();
      expect(image).toHaveLength(3);
    });
  });
});
