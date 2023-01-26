import { render, screen } from "@testing-library/react";
import Slider from "./Carousel";

describe("Given a slider component", () => {
  describe("When is rendered with n images", () => {
    test("Then these should be n images in document", () => {
      const n = 3;

      render(<Slider />);
      const images = screen.getAllByRole("img");

      expect(images).toHaveLength(n);
      images.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
  describe("When is rendered with text for image", () => {
    test("Then these should be in document", () => {
      const expectTexts = [];
      expectTexts[0] = "Crea";
      expectTexts[1] = "Comparteix";
      expectTexts[2] = "Seqüències";

      render(<Slider />);
      const texts: any = [];
      expectTexts.forEach((text, index) => {
        texts[index] = screen.getByText(text);
      });

      texts.forEach((text: string) => expect(text).toBeInTheDocument());
    });
  });
});
