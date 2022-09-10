import PictogramShowStyled from "./PictogramShowStyled";

interface PictogramShowProps {
  pictogram: number;
}

const PictogramShow = ({ pictogram }: PictogramShowProps): JSX.Element => {
  return (
    <PictogramShowStyled
      src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
      className=""
      alt="obrir l'aixta"
      height="200px"
      width="200px"
    />
  );
};

export default PictogramShow;
