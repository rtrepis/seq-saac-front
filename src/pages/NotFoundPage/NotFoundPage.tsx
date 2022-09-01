import UrlNotFound from "../../components/UrlNotFound/UrlNotFound";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h1>404: Not Found Page</h1>
      <UrlNotFound />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
