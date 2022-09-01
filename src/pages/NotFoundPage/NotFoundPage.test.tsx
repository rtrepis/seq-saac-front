import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Give a page register form", () => {
  describe("When its rendering with title", () => {
    test("Then should show in document", () => {
      const expectTitle = "404: Not Found Page";

      render(<NotFoundPage />);
      const title = screen.getByText(expectTitle);

      expect(title).toBeInTheDocument();
    });
  });
});
