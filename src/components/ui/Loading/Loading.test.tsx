import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a component Loading", () => {
  describe("When is rendering", () => {
    test("Then should hidden text loading", () => {
      const expectText = "Loading...";

      render(<Loading />);
      const text = screen.getByText(expectText);

      expect(text).toBeInTheDocument();
    });
  });
});
