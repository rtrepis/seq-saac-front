import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useUser from "../../hooks/useUser";

interface NavigationProps {
  page:
    | "Registrar-se"
    | "SEQ-SAAC"
    | "Inicia sessió"
    | "Les meves seqüències"
    | "Seqüència"
    | "Crear la seqüència"
    | "Editar la seqüència"
    | "Termes i condicions";

  linkPage:
    | "register"
    | "home"
    | "login"
    | "my-sequences"
    | "details-sequence"
    | "create-sequence"
    | "edit-sequence";
}

const Navigation = ({ page, linkPage }: NavigationProps): JSX.Element => {
  const { userLogout } = useUser();
  const { userName } = useSelector((state: RootState) => state.user);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      variant="dark"
      className="display-flex  justify-content-between p-2 ps-3 pe-3"
    >
      <Navbar.Brand className="ms-3">
        <h1 className="mb-0">{page}</h1>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="border-3"
      />

      {userName === "" && (
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {linkPage !== "home" && (
              <Nav.Item>
                <Nav.Link href="home">Inici</Nav.Link>
              </Nav.Item>
            )}
            {linkPage !== "register" && (
              <Nav.Item>
                <Nav.Link href="register">Registrar-se</Nav.Link>
              </Nav.Item>
            )}
            {linkPage !== "login" && (
              <Nav.Item>
                <Nav.Link href="login">Inicia sessió</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      )}
      {userName !== "" && (
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <NavDropdown
              title={userName}
              id="nav-dropdown"
              align={{ lg: "start" }}
              drop="down"
            >
              {linkPage !== "my-sequences" && (
                <NavDropdown.Item href="my-sequences">
                  Les meves seqüències
                </NavDropdown.Item>
              )}
              {linkPage !== "create-sequence" && (
                <NavDropdown.Item href="create-sequences">
                  Crear la seqüència
                </NavDropdown.Item>
              )}
            </NavDropdown>
            {linkPage !== "home" && (
              <Nav.Item>
                <Nav.Link href="home">Inici</Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Nav.Link onClick={userLogout}>Tanca sessió</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default Navigation;
