import { Row } from "react-bootstrap";
import { Sequences } from "../../models/sequencesInterface";
import SequenceCard from "../SequenceCard/SequenceCard";
import "./SequencesCardList.css";

interface SequenceCardListProps {
  sequences: Sequences[];
}

const SequencesCardList = ({
  sequences,
}: SequenceCardListProps): JSX.Element => {
  return (
    <ul className="container justify-content-center m-0 p-0 mt-3 ">
      <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {sequences.map((sequence) => (
          <li key={sequence.id} className="outstyle">
            <SequenceCard
              name={sequence.name}
              pictograms={sequence.pictograms}
            />
          </li>
        ))}
      </Row>
    </ul>
  );
};

export default SequencesCardList;
