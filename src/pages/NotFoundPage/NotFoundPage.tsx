import { Button } from "react-bootstrap";
import UrlNotFound from "../../components/UrlNotFound/UrlNotFound";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h1>404: Pàgina web no trobada</h1>
      <UrlNotFound />
      <Button variant="primary" type="button" className="m-3" href="home">
        Inici
      </Button>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
