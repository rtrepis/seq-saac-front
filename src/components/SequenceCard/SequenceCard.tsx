import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface SequenceCardProps {
  name: string;
  pictograms: number[];
}

const SequenceCard = ({ name, pictograms }: SequenceCardProps): JSX.Element => {
  return (
    <Col className="mx-auto">
      <Card style={{ width: "20.5rem" }} border="primary" className="mx-auto">
        <Card.Header className="p-2 ps-3">
          <h3 className="mb-0">{name}</h3>
        </Card.Header>
        <Card.Body>
          {pictograms.slice(0, 3).map((pictogram) => (
            <img
              src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
              className="img-thumbnail me-1"
              alt="obrir l'aixta"
              height="92px"
              width="92px"
              key={pictogram}
            />
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SequenceCard;
