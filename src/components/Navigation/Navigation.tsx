import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface NavigationProps {
  page: "Registrar-se" | "SEQ-SAAC";
  linkPage: "register" | "home";
}

const Navigation = ({ page, linkPage }: NavigationProps): JSX.Element => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Container className="d-flex justify-content-start">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href={`/${linkPage}`} className="ms-3">
          <h1 className="mb-0">{page}</h1>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {linkPage === "register" ? (
            ""
          ) : (
            <Nav>
              <Nav.Link href="/register">Registrar-se</Nav.Link>
            </Nav>
          )}
          <Nav className="me-auto"></Nav>
          {linkPage === "home" ? (
            ""
          ) : (
            <Nav>
              <Nav.Link href="/home">Inici</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
