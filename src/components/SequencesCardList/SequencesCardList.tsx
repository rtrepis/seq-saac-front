import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useApi from "../../hooks/useApi";
import SequenceCard from "../SequenceCard/SequenceCard";
import "./SequencesCardList.css";

const SequencesCardList = (): JSX.Element => {
  const { getAllPublicSequence } = useApi();
  const sequencePublic = useSelector((state: RootState) => state.sequences);

  useEffect(() => {
    getAllPublicSequence();
  }, [getAllPublicSequence]);

  return (
    <ul className="container justify-content-center m-0 p-0 mt-3 ">
      <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {sequencePublic.map((sequence) => (
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
