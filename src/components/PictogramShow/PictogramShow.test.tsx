import { render, screen } from "@testing-library/react";
import PictogramShow from "./PictogramShow";

describe("Given a Pictogram Show component", () => {
  describe("When we pass a pictogram number to it", () => {
    test("Then we expect it to render this pictogram", () => {
      const pictogramProps = 11737;
      const altImages = "pictograma";
      const size = "big";

      render(<PictogramShow pictogram={pictogramProps} size={size} />);
      const images = screen.getByRole("img", { name: altImages });

      expect(images).toBeInTheDocument();
    });
  });
});
