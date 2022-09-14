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
    <Row xs={1} md={2} lg={3} xl={4} className="g-3 mx-auto mt-3">
      {sequences.map((sequence) => (
        <SequenceCard
          name={sequence.name}
          pictograms={sequence.pictograms}
          id={sequence.id}
          key={sequence.id}
        />
      ))}
    </Row>
  );
};

export default SequencesCardList;
