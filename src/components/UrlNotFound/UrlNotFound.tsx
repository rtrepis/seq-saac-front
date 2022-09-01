import UrlNotFoundStyled from "./UrlNotFoundStyled";

const UrlNotFound = (): JSX.Element => {
  return (
    <UrlNotFoundStyled>
      <h1>404: Not Found Page</h1>
      <img
        height={150}
        width={150}
        src={"/img/pagina-web.png"}
        alt="Pàgina web"
      />
      <img height={150} width={150} src={"/img/no.png"} alt="No" />
      <img height={150} width={150} src={"/img/trobar.png"} alt="Trobar" />
    </UrlNotFoundStyled>
  );
};

export default UrlNotFound;
