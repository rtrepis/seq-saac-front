import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import Navigation from "../../components/Navigation/Navigation";
import PictogramShow from "../../components/PictogramShow/PictogramShow";
import useApi from "../../hooks/useApi";
import DetailsSequencePageStyled from "./DetailsSequencePageStyled";

const DetailsSequencePage = (): JSX.Element => {
  const { sequences } = useSelector((state: RootState) => state);
  const { getSequence } = useApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await getSequence(id!);
    })();
  }, [getSequence, id]);

  return (
    <>
      <Navigation page="Seqüència" linkPage="details-sequence" />
      <DetailsSequencePageStyled>
        {sequences[0].pictograms.map((element: number) => (
          <PictogramShow pictogram={element} />
        ))}
      </DetailsSequencePageStyled>
    </>
  );
};

export default DetailsSequencePage;
