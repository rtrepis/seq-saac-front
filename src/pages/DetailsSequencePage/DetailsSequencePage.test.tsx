import { render, screen } from "../../utils/test/test-utils-Logout";
import DetailsSequencePage from "./DetailsSequencePage";

const mockPayload = {
  sequences: [
    {
      id: "63199e9c8aa067d2f0931a4e",
      name: "",
      owner: "235",
      pictograms: [0, 1],
      privately: true,
    },
  ],
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockPayload,
  useParams: () => {
    "63199e9c8aa067d2f0931a4e";
  },
}));

describe("Given a Details component", () => {
  describe("When we have and title page", () => {
    test("Then we expect to see this title page", async () => {
      const pageTitle = "Seqüència";
      const expectNavigation = "";

      render(<DetailsSequencePage />);
      const title = screen.getByRole("heading", { level: 1, name: pageTitle });
      const navigation = screen.getByRole("navigation", {
        name: expectNavigation,
      });

      expect(title).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });

  describe("When pass through an arraypictogramsmock", () => {
    test("Then the past sequences are rendered", () => {
      const pictogramsMockProperty = [0, 1];
      const altImages = "pictograma";

      render(<DetailsSequencePage />);
      const images = screen.getAllByRole("img", { name: altImages });

      expect(images).toHaveLength(pictogramsMockProperty.length);
    });
  });
});
