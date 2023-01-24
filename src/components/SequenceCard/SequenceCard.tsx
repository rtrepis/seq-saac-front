import { Col, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { IoPencilOutline, IoTrashOutline } from "react-icons/io5";
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
  const { deleteSequenceId } = useApi();

  const handlerDeleteSequenceId = (idSequence: string) => {
    deleteSequenceId(idSequence);
  };
  return (
    <Col className="mx-auto">
      <Card style={{ width: "20.5rem" }} border="primary" className="mx-auto">
        <Card.Header className="p-2 ps-3">
          <Nav.Link
            className="sequence-link"
            as={NavLink}
            to={`/details-sequence/${id}`}
          >
            <h3 className="mb-0">{name}</h3>
          </Nav.Link>
        </Card.Header>
        <Nav.Link
          className="sequence-link"
          as={NavLink}
          to={`/details-sequence/${id}`}
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
                  key={new Date().getMilliseconds() + "_" + pictogram}
                />
              </>
            ))}
          </Card.Body>
        </Nav.Link>
        {owner && (
          <Card.Footer className="d-flex justify-content-end p-0 ps-3 pe-3">
            <Nav.Link as={NavLink} to={`/edit-sequence/${id}`}>
              <IoPencilOutline className="ms-3" />
              <span hidden>Llapis per editar la seqüència</span>
            </Nav.Link>
            {privately && (
              <Nav.Link onClick={() => handlerDeleteSequenceId(id)}>
                <IoTrashOutline className="ms-3" />
                <span hidden>Brosa per borrar la seqüència</span>
              </Nav.Link>
            )}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

export default SequenceCard;
