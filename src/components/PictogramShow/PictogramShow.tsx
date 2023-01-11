import PictogramShowStyled from "./PictogramShowStyled";

interface PictogramShowProps {
  pictogram: number;
  size: "small" | "big" | number;
}

const PictogramShow = ({
  pictogram,
  size,
}: PictogramShowProps): JSX.Element => {
  if (size === "small") {
    size = 100;
  }
  if (size === "big") {
    size = 300;
  }
  return (
    <PictogramShowStyled
      src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
      className="border border-primary rounded-3 m-3 p-1"
      alt="pictograma"
      height={size + "px"}
      width={size + "px"}
    />
  );
};

export default PictogramShow;
