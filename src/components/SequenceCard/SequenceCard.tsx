import Card from "react-bootstrap/Card";

const SequenceCard = (): JSX.Element => {
  return (
    <Card style={{ width: "20.5rem" }} className="m-2">
      <Card.Header className="p-2 ps-3">
        <h2 className="mb-0">Rentar mans</h2>
      </Card.Header>
      <Card.Body>
        <img
          src="https://api.arasaac.org/api/pictograms/11737"
          className="img-thumbnail me-1"
          alt="obrir l'aixta"
          height="92px"
          width="92px"
        />
        <img
          src="https://api.arasaac.org/api/pictograms/8975"
          className="img-thumbnail ms-1 me-1"
          alt="obrir l'aixta"
          height="92px"
          width="92px"
        />
        <img
          src="https://api.arasaac.org/api/pictograms/35729"
          className="img-thumbnail ms-1"
          alt="obrir l'aixta"
          height="92px"
          width="92px"
        />
      </Card.Body>
    </Card>
  );
};

export default SequenceCard;
