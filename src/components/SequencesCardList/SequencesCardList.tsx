import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SequencesI } from "../../models/sequencesInterface";
import Loading from "../ui/Loading/Loading";
import SequenceCard from "../SequenceCard/SequenceCard";
import "./SequencesCardList.css";

interface SequenceCardListProps {
  owner?: boolean;
  sequences: SequencesI[];
}

const SequencesCardList = ({
  sequences,
  owner,
}: SequenceCardListProps): JSX.Element => {
  const { loading } = useSelector((state: RootState) => state.ui);

  return (
    <>
      {loading && <Loading />}

      {sequences.length === 0 && (
        <div className="justify-content-center p-5 row">
          No s'ha trobat cap seqüència
        </div>
      )}

      <Row xs={1} md={2} lg={3} xxl={4} className="g-3 mx-auto mt-3">
        {sequences.map((sequence) => (
          <SequenceCard
            name={sequence.name}
            pictograms={sequence.pictograms}
            id={sequence.id}
            key={sequence.id}
            owner={owner}
            privately={sequence.privately}
          />
        ))}
      </Row>
    </>
  );
};

export default SequencesCardList;
