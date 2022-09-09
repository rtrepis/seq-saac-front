import Navigation from "../../components/Navigation/Navigation";
import PictogramShow from "../../components/PictogramShow/PictogramShow";
import DetailsSequencePageStyled from "./DetailsSequencePageStyled";

const DetailsSequencePage = (): JSX.Element => {
  const pictograms = [11737, 8975, 35729, 2443, 11739];

  return (
    <>
      <Navigation page="Seqüència" linkPage="details-sequence" />
      <DetailsSequencePageStyled>
        {pictograms.map((element) => (
          <PictogramShow pictogram={element} />
        ))}
      </DetailsSequencePageStyled>
    </>
  );
};

export default DetailsSequencePage;
