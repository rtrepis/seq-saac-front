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
  describe("When is rendered with same caption for image", () => {
    test("Then these should be in document", () => {
      const expectCaption = "Crea i comparteix les teves seqüències";

      render(<Slider />);
      const caption = screen.getAllByRole("heading", {
        level: 2,
        name: expectCaption,
      });

      caption.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
