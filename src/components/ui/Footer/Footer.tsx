import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <div className="text-center fs-6 mt-5 p-4 pt-3 pb-3 bg-dark text-white not-print">
      ® SeqSaac -
      <Nav.Link to="/terms" as={NavLink} bsPrefix="link-white">
        Termes i condicions
      </Nav.Link>
    </div>
  );
};

export default Footer;
