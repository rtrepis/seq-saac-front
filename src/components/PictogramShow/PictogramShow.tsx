import PictogramShowStyled from "./PictogramShowStyled";

interface PictogramShowProps {
  pictogram: number;
  size: "small" | "big";
}

const PictogramShow = ({
  pictogram,
  size,
}: PictogramShowProps): JSX.Element => {
  return (
    <PictogramShowStyled
      src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
      className="border border-primary rounded-3 m-3 p-1"
      alt="pictograma"
      height={size === "small" ? "100px" : "300px"}
      width={size === "small" ? "100px" : "300px"}
    />
  );
};

export default PictogramShow;
