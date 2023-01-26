import { render, screen } from "@testing-library/react";
import Cta from "./Cta";

describe("Give a component Cta", () => {
  describe("When it is rendered", () => {
    test("Then it should display the expected text", () => {
      const expectTexts: string[] = [];
      expectTexts[0] = "Crea";
      expectTexts[1] = "Comparteix";
      expectTexts[2] = "Seqüències";

      render(<Cta />);
      const texts: any = [];
      expectTexts.forEach((text, index) => {
        texts[index] = screen.getByText(text);
      });

      texts.forEach((text: string) => {
        expect(text).toBeInTheDocument();
      });
    });
  });
});
