const Cta = (): JSX.Element => {
  return (
    <div className="d-none bg-primary bg-opacity-25 p-4 d-md-flex justify-content-around align-items-center">
      <div className="text-center">
        <img
          src="/img/cta/crea-200px.jpg"
          alt="crea"
          height="200"
          width="200"
          className="border-top border-4 border-primary rounded-4"
        />
        <h2 className="mt-3 pb-2 fw-bold text-dark border-bottom border-4 border-primary rounded-5">
          Crea
        </h2>
      </div>
      <div className="text-center">
        <img
          src="/img/cta/compartir-200px.jpg"
          alt="compartir"
          height="200"
          width="200"
          className="border-top border-4 border-primary rounded-4"
        />
        <h2 className="mt-3 pb-2 fw-bold text-dark border-bottom border-4 border-primary rounded-5">
          Comparteix
        </h2>
      </div>
      <div className="text-center">
        <img
          src="/img/cta/sequencies-200px.jpg"
          alt="seqüències"
          height="200"
          width="200"
          className="border-top border-4 border-primary rounded-4"
        />
        <h2 className="mt-3 pb-2 fw-bold text-dark border-bottom border-4 border-primary rounded-5">
          Seqüències
        </h2>
      </div>
    </div>
  );
};

export default Cta;
