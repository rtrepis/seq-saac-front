import { screen, render } from "../../../utils/test/test-utils-Logout";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";
import { renderUser } from "../../../utils/test/test-utils-Login";
import pagesName, { navigationText } from "../../../language/ca";

describe("Given a navigation component", () => {
  describe("When it is rendered with props pageLink 'register''", () => {
    test("then it will display title", () => {
      const pageLink = "register";
      const expectPageTitle = pagesName[pageLink];

      render(<Navigation linkPage={pageLink} />);
      const title = screen.getByRole("heading", { name: expectPageTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered with title 'SEQ-SAAC'", () => {
    test("then it will display 'SEQ-SAAC' title", () => {
      const pageLinkHome = "home";
      const expectPageTitleHome = pagesName[pageLinkHome];

      render(<Navigation linkPage={pageLinkHome} />);
      const title = screen.getByRole("heading", { name: expectPageTitleHome });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When user click on 'Inici' and 'Inicia sessió' link", () => {
    test("Then should called navigate function", async () => {
      const pageLink = "register";
      const expectClickLink_1 = pagesName.home;
      const expectClickLink_2 = pagesName.login;

      render(<Navigation linkPage={pageLink} />);
      const linkClick_1 = screen.getByRole("link", {
        name: expectClickLink_1,
      });
      const linkClick_2 = screen.getByRole("link", {
        name: expectClickLink_2,
      });

      await userEvent.click(linkClick_1);
      await userEvent.click(linkClick_2);

      expect(linkClick_1).toBeInTheDocument();
      expect(linkClick_2).toBeInTheDocument();
    });
  });

  describe("When user Logged to be home page and click linkDrop", () => {
    test("Then should show links logged and navigate", async () => {
      const pageLink = "home";
      const linkDropExpect = "UserTest";
      const expectLink_1_click = pagesName.mySequences;
      const expectLink_2_click = pagesName.createSequence;
      const expectLink_3 = navigationText.logout;

      renderUser(<Navigation linkPage={pageLink} />);

      const linkDrop = screen.getByRole("button", { name: linkDropExpect });

      await userEvent.click(linkDrop);

      const link1 = screen.getByRole("button", { name: expectLink_3 });
      const link2 = screen.getByRole("link", { name: expectLink_1_click });
      const link3 = screen.getByRole("link", { name: expectLink_2_click });
      await userEvent.click(link2);
      await userEvent.click(link3);

      expect(linkDrop).toBeInTheDocument();
      expect(link1).toBeInTheDocument();
      expect(link2).toBeInTheDocument();
      expect(link3).toBeInTheDocument();
    });
  });

  describe("When user Logged to be mySequence page", () => {
    test("Then should show links logged and navigate", async () => {
      const pageLink = "mySequences";
      const expectLink_2_Click = pagesName.home;
      const expectLink_3_Click = pagesName.createSequence;
      const expectLink_2 = "UserTest";

      renderUser(<Navigation linkPage={pageLink} />);

      const link2 = screen.getByRole("link", { name: expectLink_2_Click });
      const linkDrop = screen.getByRole("button", { name: expectLink_2 });

      await userEvent.click(link2);
      await userEvent.click(linkDrop);
      const link3 = screen.getByRole("link", { name: expectLink_3_Click });

      await userEvent.click(link3);

      expect(link2).toBeInTheDocument();
      expect(link3).toBeInTheDocument();
    });
  });
});
