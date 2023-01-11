import { render } from "@testing-library/react";
import PictogramWord from "./PictogramWord";

const mock = jest.fn();

jest.mock("../../hooks/useAraSaac", () => () => ({
  getWordPictogram: mock,
}));

describe("Give a pictogram word component", () => {
  describe("When it is rendered with pictogram number by props", () => {
    test("Then we expect to see the pictogram word", async () => {
      const pictogramNumber = 1234;
      const expectWord = "WordPictogram-1234";

      render(<PictogramWord pictogram={pictogramNumber} />);
    });
  });
});
