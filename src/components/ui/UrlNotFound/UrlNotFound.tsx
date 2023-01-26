const UrlNotFound = (): JSX.Element => {
  return (
    <>
      <img
        height={150}
        width={150}
        src={"/img/pagenotfound/pagina-web.png"}
        alt="Pàgina web"
      />
      <img height={150} width={150} src={"/img/pagenotfound/no.png"} alt="No" />
      <img
        height={150}
        width={150}
        src={"/img/pagenotfound/trobar.png"}
        alt="Trobar"
      />
    </>
  );
};

export default UrlNotFound;
