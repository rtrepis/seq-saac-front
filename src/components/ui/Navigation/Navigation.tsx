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

  if (isNotPrint === undefined) {
    isNotPrint = false;
  }

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      variant="dark"
      className={`p-4 pt-2 pb-2 pb-md-0 pe-md-0 border-bottom border-3 border-white justify-content-between ${
        isNotPrint && "not-print"
      }`}
    >
      <Navbar.Brand
        className="d-flex m-0 p-0"
        as={NavLink}
        to="/home"
        aria-label={pagesName.home}
      >
        <IoHome className="m-0 mb-1" aria-label={`icon ${pagesName.home}`} />
        <h1 className="m-0 fw-bolder d-md-none text-white">
          {pagesName[linkPage]}
        </h1>
        <h1 className="m-0 mb-2 fw-bolder d-none d-md-block text-white">
          SeqSaac
        </h1>
      </Navbar.Brand>
      {userName !== "" ? (
        <>
          <Navbar.Toggle>
            <IoPerson className="fs-2" aria-label={userName} />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-md-none justify-content-end"
          >
            <Nav className="d-md-none ms-2">
              {linkPage !== "mySequences" && (
                <Nav.Link as={NavLink} to="/my-sequences">
                  {pagesName.mySequences}
                </Nav.Link>
              )}
              {linkPage !== "createSequence" && (
                <Nav.Link as={NavLink} to="/create-sequence">
                  {pagesName.createSequence}
                </Nav.Link>
              )}
              <Nav.Link>
                <IoLogOutOutline
                  className="fs-3"
                  aria-label={navigationText.logout}
                  onClick={userLogout}
                />
              </Nav.Link>
            </Nav>

            <Nav variant="tabs" className="d-none d-md-flex">
              <Nav.Link
                as={NavLink}
                to="/my-sequences"
                className="d-none d-md-block"
              >
                {pagesName.mySequences}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/create-sequence"
                className="d-none d-md-block"
              >
                {pagesName.createSequence}
              </Nav.Link>
              <Nav.Link>
                <IoLogOutOutline
                  className="fs-3"
                  aria-label={navigationText.logout}
                  onClick={userLogout}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      ) : (
        linkPage !== "login" && (
          <Nav.Link as={NavLink} to="/login" className="p-1">
            <IoLogIn
              className="fs-1 m-0 mb-1 me-md-4 text-white"
              aria-label={pagesName.login}
            />
          </Nav.Link>
        )
      )}
    </Navbar>
  );
};

export default Navigation;
