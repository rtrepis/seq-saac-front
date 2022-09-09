import { screen } from "@testing-library/react";
import { render } from "../../utils/test/test-utils-Loggout";
import DetailsSequencePage from "./DetailsSequencePage";

describe("Given a Details component", () => {
  describe("When we have and title page", () => {
    test("Then we expect to see this title page", () => {
      const pageTitle = "Seqüència";
      const expectNavigation = "";

      render(<DetailsSequencePage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });

  describe("When pass through an arraymock", () => {
    test("Then the past sequences are rendered", () => {
      const pictograms = [11737, 8975, 35729, 2443, 11739];
      const altImages = "obrir l'aixta";

      render(<DetailsSequencePage />);

      const images = screen.getAllByRole("img", { name: altImages });

      expect(images).toHaveLength(pictograms.length);
    });
  });
});
