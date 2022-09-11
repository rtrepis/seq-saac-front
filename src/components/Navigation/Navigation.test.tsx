import { screen } from "@testing-library/react";
import { render } from "../../utils/test/test-utils-Loggout";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";
import { renderUser } from "../../utils/test/test-utils-Loggin";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a navigation component", () => {
  describe("When it is rendered with props page title 'Regisrar-se'", () => {
    test("then it will display this title", () => {
      const pageTitle = "Registrar-se";
      const pageLink = "register";

      render(<Navigation page={pageTitle} linkPage={pageLink} />);
      const title = screen.getByRole("heading", { name: pageTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered with title 'SEQ-SAAC'", () => {
    test("then it will display 'SEQ-SAAC' title", () => {
      const pageTitleHome = "SEQ-SAAC";
      const pageLinkHome = "home";

      render(<Navigation page={pageTitleHome} linkPage={pageLinkHome} />);
      const title = screen.getByRole("heading", { name: pageTitleHome });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When user click on 'Inici' and 'Inicia sessió' link", () => {
    test("Then should called navigate function", async () => {
      const pageTitle = "Registrar-se";
      const pageLink = "register";
      const expectClickLink_1 = "Inici";
      const expectClickLink_2 = "Inicia sessió";

      render(<Navigation page={pageTitle} linkPage={pageLink} />);
      const linkClick_1 = screen.getByRole("button", {
        name: expectClickLink_1,
      });
      const linkClick_2 = screen.getByRole("button", {
        name: expectClickLink_2,
      });

      await userEvent.click(linkClick_1);
      await userEvent.click(linkClick_2);

      expect(linkClick_1).toBeInTheDocument();
      expect(linkClick_2).toBeInTheDocument();
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When user click on 'Registrar-se' link", () => {
    test("Then should called navigate function", async () => {
      const pageTitle = "Inicia sessió";
      const pageLink = "login";
      const expectClickLink_1 = "Registrar-se";

      render(<Navigation page={pageTitle} linkPage={pageLink} />);
      const linkClick_1 = screen.getByRole("button", {
        name: expectClickLink_1,
      });

      await userEvent.click(linkClick_1);

      expect(linkClick_1).toBeInTheDocument();
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When user Logged to be home page", () => {
    test("Then should show links logged and navigate", async () => {
      const pageTitle = "SEQ-SAAC";
      const pageLink = "home";
      const expectLink_1 = "Tanca sessió";
      const expectLink_2 = "UserTest";
      const expectLink_3_click = "Les meves seqüències";
      const expectLink_4_click = "Crear la seqüència";

      renderUser(<Navigation page={pageTitle} linkPage={pageLink} />);

      const link1 = screen.getByRole("button", { name: expectLink_1 });
      const linkDrop = screen.getByRole("button", { name: expectLink_2 });

      await userEvent.click(linkDrop);

      const link3 = screen.getByRole("button", { name: expectLink_3_click });
      const link4 = screen.getByRole("button", { name: expectLink_4_click });
      await userEvent.click(link3);
      await userEvent.click(link4);

      expect(link1).toBeInTheDocument();
      expect(linkDrop).toBeInTheDocument();
      expect(link3).toBeInTheDocument();
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When user Logged to be mySequence page", () => {
    test("Then should show links logged and navigate", async () => {
      const pageTitle = "Les meves seqüències";
      const pageLink = "my-sequences";
      const expectLink_1 = "Tanca sessió";
      const expectLink_2_Click = "Inici";
      const expectLink_3_Click = "Crear la seqüència";
      const expectLink_2 = "UserTest";

      renderUser(<Navigation page={pageTitle} linkPage={pageLink} />);

      const link1 = screen.getByRole("button", { name: expectLink_1 });
      const link2 = screen.getByRole("button", { name: expectLink_2_Click });
      const linkDrop = screen.getByRole("button", { name: expectLink_2 });

      await userEvent.click(link2);
      await userEvent.click(linkDrop);
      const link3 = screen.getByRole("button", { name: expectLink_3_Click });

      await userEvent.click(link3);

      expect(link1).toBeInTheDocument();
      expect(link2).toBeInTheDocument();
      expect(link3).toBeInTheDocument();
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
