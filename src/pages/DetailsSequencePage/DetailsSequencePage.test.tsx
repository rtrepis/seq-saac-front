import { render, screen } from "../../utils/test/test-utils-Logout";
import DetailsSequencePage from "./DetailsSequencePage";
import userEvent from "@testing-library/user-event";
import React from "react";

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

  describe("When pass through an arrayPictogramsMock", () => {
    test("Then the past sequences are rendered", () => {
      const pictogramsMockProperty = [0, 1];
      const altImages = "pictograma";

      render(<DetailsSequencePage />);
      const images = screen.getAllByRole("img", { name: altImages });

      expect(images).toHaveLength(pictogramsMockProperty.length);
    });
  });

  describe("When user click in settings", () => {
    test("Then should show 'paraula' setting", async () => {
      const settingsIcon = "Configuració";
      const expectSetting = "Paraula";

      render(<DetailsSequencePage />);
      const icon = screen.getByLabelText(settingsIcon);

      await userEvent.click(icon);

      const setting = screen.getByText(expectSetting);

      expect(setting).toBeInTheDocument();
    });
  });

  describe("When user click in 'Paraula' switch", () => {
    test("Then should show pictogramWord", async () => {
      const settingWord = "Paraula";

      render(<DetailsSequencePage />);
      const switchWord = screen.getByRole("checkbox", { name: settingWord });

      await userEvent.click(switchWord);

      expect(switchWord).toBeChecked();
    });
  });

  describe("When user click radio option", () => {
    test("Then should checked this radio option", async () => {
      render(<DetailsSequencePage />);
      const switchWord = screen.getAllByRole("radio", {
        name: "",
      });
      await userEvent.click(switchWord[0]);

      expect(switchWord[0]).toBeChecked();
    });
  });
});
