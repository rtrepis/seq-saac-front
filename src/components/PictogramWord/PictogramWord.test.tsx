import { act, render, waitFor } from "../../utils/test/test-utils-Logout";
import PictogramWord from "./PictogramWord";
import React from "react";

describe("Give a pictogram word component", () => {
  describe("When it is rendered with pictogram number by props", () => {
    test("Then we expect to see the pictogram word", async () => {
      const pictogramNumber = 1234;
      let wordPictogram = jest.spyOn(React, "useState");

      await waitFor(() =>
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => render(<PictogramWord pictogram={pictogramNumber} />))
      );

      expect(wordPictogram).toBeCalled();
    });
  });
});
