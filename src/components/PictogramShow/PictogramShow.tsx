import PictogramShowStyled from "./PictogramShowStyled";

interface PictogramShowProps {
  pictogram: number;
}

const PictogramShow = ({ pictogram }: PictogramShowProps): JSX.Element => {
  return (
    <PictogramShowStyled
      src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
      className=""
      alt="pictograma"
      height="300px"
      width="300px"
    />
  );
};

export default PictogramShow;
