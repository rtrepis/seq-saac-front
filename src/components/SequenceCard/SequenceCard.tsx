import { Col, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

interface SequenceCardProps {
  name: string;
  pictograms: number[];
  id: string;
}

const SequenceCard = ({
  name,
  pictograms,
  id,
}: SequenceCardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Nav.Link
      className="sequence-link"
      onClick={() => navigate(`/details-sequence/${id}`)}
    >
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
                alt="pictograma"
                height="92px"
                width="92px"
                key={pictogram}
              />
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Nav.Link>
  );
};

export default SequenceCard;
