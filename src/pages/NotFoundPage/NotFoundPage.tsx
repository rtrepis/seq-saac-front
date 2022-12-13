import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UrlNotFound from "../../components/UrlNotFound/UrlNotFound";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h1>404: Pàgina web no trobada</h1>
      <UrlNotFound />
      <Link to="/home">
        <Button variant="primary" type="button" className="m-3">
          Inici
        </Button>
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
