import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import useUser from "../../hooks/useUser";

interface NavigationProps {
  page: "Registrar-se" | "SEQ-SAAC" | "Inicia sessió";
  linkPage: "register" | "home" | "login";
}

const Navigation = ({ page, linkPage }: NavigationProps): JSX.Element => {
  const navigate = useNavigate();

  const { userLogout } = useUser();
  const { userName } = useSelector((state: RootState) => state.user);

  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container className="d-flex justify-content-start">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href={`/${linkPage}`} className="ms-3">
          <h1 className="mb-0">{page}</h1>
        </Navbar.Brand>

        {userName === "" ? (
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto"></Nav>
            {linkPage === "register" ? (
              ""
            ) : (
              <Nav>
                <Nav.Link href="" onClick={() => navigate("/register")}>
                  Registrar-se
                </Nav.Link>
              </Nav>
            )}
            <Nav className="me-auto"></Nav>
            {linkPage === "home" ? (
              ""
            ) : (
              <Nav>
                <Nav.Link onClick={() => navigate("/home")}>Inici</Nav.Link>
              </Nav>
            )}
            <Nav className="me-auto"></Nav>
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
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="justify-content-end">
              {linkPage === "home" ? (
                ""
              ) : (
                <Nav.Item>
                  <Nav.Link onClick={() => navigate("/home")}>Inici</Nav.Link>
                </Nav.Item>
              )}
              <Nav.Item>
                <Nav.Link href="/home" onClick={userLogout}>
                  Tanca sessió
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title={userName}
                id="nav-dropdown"
                align={{ lg: "end" }}
              >
                <NavDropdown.Item>Link_1</NavDropdown.Item>
                <NavDropdown.Item>Link_2</NavDropdown.Item>
                <NavDropdown.Item>Link_3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;
