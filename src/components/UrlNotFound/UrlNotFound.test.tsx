import { render, screen } from "@testing-library/react";
import UrlNotFound from "./UrlNotFound";

describe("Given a component urlnotfound", () => {
  describe("When it is rendering with title and 3 images", () => {
    test("Then we expect these to show", () => {
      const expectAltPageWWW = "Pàgina web";
      const expectAltNo = "No";
      const expectAltFound = "Trobar";

      render(<UrlNotFound />);
      const img1 = screen.getByAltText(expectAltPageWWW);
      const img2 = screen.getByAltText(expectAltNo);
      const img3 = screen.getByAltText(expectAltFound);

      expect(img1).toBeInTheDocument();
      expect(img2).toBeInTheDocument();
      expect(img3).toBeInTheDocument();
    });
  });
});
