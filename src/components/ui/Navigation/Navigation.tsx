import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoHome, IoLogIn, IoLogOutOutline, IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../app/store";
import useUser from "../../../hooks/useUser";
import pagesName, { navigationText } from "../../../language/ca";

interface NavigationProps {
  linkPage:
    | "register"
    | "home"
    | "login"
    | "mySequences"
    | "detailsSequence"
    | "createSequence"
    | "editSequence"
    | "terms";

  isNotPrint?: boolean;
}

const Navigation = ({ linkPage, isNotPrint }: NavigationProps): JSX.Element => {
  const { userLogout } = useUser();
  const { userName } = useSelector((state: RootState) => state.user);
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      variant="dark"
      className={`p-4 pt-2 pb-2 border-bottom border-3 border-white d-flex justify-content-between align-center ${
        isNotPrint && "not-print"
      }`}
    >
      <div className="d-flex">
        <Nav>
          <Nav.Link as={NavLink} to="/home" className="me-2 p-0 fs-3">
            <IoHome className="m-0 mb-1" aria-label={pagesName.home} />
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="d-flex m-0 p-0">
          <h1 className="m-0 fw-bolder ">{pagesName[linkPage]}</h1>
        </Navbar.Brand>
      </div>
      <Nav>
        {userName === "" ? (
          <Nav.Link as={NavLink} to="/Login" bsPrefix="link-white  m-0">
            <IoLogIn className="fs-1 m-0 mb-1" aria-label={pagesName.login} />
          </Nav.Link>
        ) : (
          <NavDropdown
            title={<IoPerson className="fs-2" aria-label={userName} />}
            id="nav-dropdown"
            align={{ lg: "start" }}
            drop="down"
          >
            {linkPage !== "mySequences" && (
              <NavDropdown.Item as={NavLink} to="/my-sequences">
                {pagesName.mySequences}
              </NavDropdown.Item>
            )}
            {linkPage !== "createSequence" && (
              <NavDropdown.Item as={NavLink} to="/create-sequence">
                {pagesName.createSequence}
              </NavDropdown.Item>
            )}
            <NavDropdown.Divider />
            <NavDropdown.Item className="text-end">
              <IoLogOutOutline
                className="fs-3"
                aria-label={navigationText.logout}
                onClick={userLogout}
              />
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
