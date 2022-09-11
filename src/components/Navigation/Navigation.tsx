import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import useUser from "../../hooks/useUser";

interface NavigationProps {
  page:
    | "Registrar-se"
    | "SEQ-SAAC"
    | "Inicia sessió"
    | "Les meves seqüències"
    | "Seqüència"
    | ""
    | "Crea la seqüència";

  linkPage:
    | "register"
    | "home"
    | "login"
    | "my-sequences"
    | "details-sequence"
    | ""
    | "create-sequence";
}

const Navigation = ({ page, linkPage }: NavigationProps): JSX.Element => {
  const navigate = useNavigate();

  const { userLogout } = useUser();
  const { userName } = useSelector((state: RootState) => state.user);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      variant="dark"
      className="display-flex justify-content-start p-2 ps-3"
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="border-3"
      />
      <Navbar.Brand className="ms-3">
        <h1 className="mb-0">{page}</h1>
      </Navbar.Brand>

      {userName === "" ? (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=""></Nav>
          {linkPage === "register" ? (
            ""
          ) : (
            <Nav>
              <Nav.Link onClick={() => navigate("/register")}>
                Registrar-se
              </Nav.Link>
            </Nav>
          )}
          <Nav className=""></Nav>
          {linkPage === "home" ? (
            ""
          ) : (
            <Nav>
              <Nav.Link onClick={() => navigate("/home")}>Inici</Nav.Link>
            </Nav>
          )}
          <Nav className=""></Nav>
          {linkPage === "login" ? (
            ""
          ) : (
            <Nav>
              <Nav.Link onClick={() => navigate("/login")}>
                Inicia sessió
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            {linkPage === "home" ? (
              ""
            ) : (
              <Nav.Item>
                <Nav.Link onClick={() => navigate("/home")}>Inici</Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Nav.Link onClick={userLogout}>Tanca sessió</Nav.Link>
            </Nav.Item>
            <NavDropdown
              title={userName}
              id="nav-dropdown"
              align={{ lg: "start" }}
            >
              {linkPage === "my-sequences" ? (
                ""
              ) : (
                <NavDropdown.Item onClick={() => navigate("/my-sequences")}>
                  Les meves seqüències
                </NavDropdown.Item>
              )}
              {linkPage === "create-sequence" ? (
                ""
              ) : (
                <NavDropdown.Item onClick={() => navigate("/create-sequence")}>
                  Crear la seqüència
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default Navigation;
