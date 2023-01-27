import { render, screen } from "../../../utils/test/test-utils-Logout";
import Footer from "./Footer";

describe("Give a component Footer", () => {
  describe("When it's rendered", () => {
    test("Then should show expectText", () => {
      const expectText = "® SeqSaac -";
      const expectLink = "Termes i condicions";

      render(<Footer />);
      const text = screen.getByText(expectText);
      const link = screen.getByRole("link", { name: expectLink });

      expect(text).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });
});
