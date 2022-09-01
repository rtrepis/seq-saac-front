const UrlNotFound = (): JSX.Element => {
  return (
    <>
      <img
        height={150}
        width={150}
        src={"/img/pagina-web.png"}
        alt="Pàgina web"
      />
      <img height={150} width={150} src={"/img/no.png"} alt="No" />
      <img height={150} width={150} src={"/img/trobar.png"} alt="Trobar" />
    </>
  );
};

export default UrlNotFound;
