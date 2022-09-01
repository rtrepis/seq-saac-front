import { render, screen } from "@testing-library/react";
import UrlNotFound from "./UrlNotFound";

describe("Given a component urlnotfound", () => {
  describe("When it is instantiated with title and 3 images", () => {
    test("Then we expect these to show", () => {
      const expectTitle = "404: Not Found Page";
      const expectAltPageWWW = "Pàgina web";
      const expectAltNo = "No";
      const expectAltFound = "Trobar";

      render(<UrlNotFound />);
      const titlePage = screen.getByText(expectTitle);
      const img1 = screen.getByAltText(expectAltPageWWW);
      const img2 = screen.getByAltText(expectAltNo);
      const img3 = screen.getByAltText(expectAltFound);

      expect(titlePage).toBeInTheDocument();
      expect(img1).toBeInTheDocument();
      expect(img2).toBeInTheDocument();
      expect(img3).toBeInTheDocument();
    });
  });
});
