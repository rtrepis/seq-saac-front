import { Col, Nav, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import useApi from "../../hooks/useApi";

interface SequenceCardProps {
  name: string;
  pictograms: number[];
  id: string;
  owner?: boolean;
  privately?: boolean;
}

const SequenceCard = ({
  name,
  pictograms,
  id,
  owner,
  privately,
}: SequenceCardProps): JSX.Element => {
  const navigate = useNavigate();
  const { deleteSequenceId } = useApi();

  const handlerDeleteSequenceId = (idSequence: string) => {
    deleteSequenceId(idSequence);
  };

  return (
    <Col className="mx-auto">
      <Card style={{ width: "20.5rem" }} border="primary" className="mx-auto">
        <Card.Header className="p-2 ps-3">
          <Row>
            <Col xs={10}>
              <Nav.Link
                className="sequence-link"
                onClick={() => navigate(`/details-sequence/${id}`)}
              >
                <h3 className="mb-0">{name}</h3>
              </Nav.Link>
            </Col>
            {privately && owner && (
              <Col xs={2}>
                <Nav.Link onClick={() => handlerDeleteSequenceId(id)}>
                  <IoTrashOutline />
                  <span hidden>Trash for delete sequences</span>
                </Nav.Link>
              </Col>
            )}
          </Row>
        </Card.Header>
        <Nav.Link
          className="sequence-link"
          onClick={() => navigate(`/details-sequence/${id}`)}
        >
          <Card.Body>
            {pictograms.slice(0, 3).map((pictogram, index) => (
              <>
                <img
                  src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
                  className="img-thumbnail me-1"
                  alt="pictograma"
                  height="92px"
                  width="92px"
                  key={pictogram}
                />
              </>
            ))}
          </Card.Body>
        </Nav.Link>
      </Card>
    </Col>
  );
};

export default SequenceCard;
