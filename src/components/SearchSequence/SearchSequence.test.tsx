import { render, screen } from "@testing-library/react";
import SearchSequence from "./SeachSequence";

describe("Give a component SearchSequences", () => {
  describe("When rendered this component", () => {
    test("Then should show expect in the document", () => {
      const expectSechSequence = "searchSequences";

      render(<SearchSequence />);
      const nameTextBox = screen.getByRole("textbox", {
        name: expectSechSequence,
      });

      expect(nameTextBox).toBeInTheDocument();
    });
  });
});
