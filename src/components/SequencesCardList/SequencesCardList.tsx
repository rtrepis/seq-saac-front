import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Sequences } from "../../models/sequencesInterface";
import Loading from "../Loading/Loading";
import SequenceCard from "../SequenceCard/SequenceCard";
import "./SequencesCardList.css";

interface SequenceCardListProps {
  sequences: Sequences[];
}

const SequencesCardList = ({
  sequences,
}: SequenceCardListProps): JSX.Element => {
  const { loading } = useSelector((state: RootState) => state.ui);

  return (
    <>
      {loading && <Loading />}

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
    </>
  );
};

export default SequencesCardList;
