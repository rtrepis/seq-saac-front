interface PictogramShowProps {
  pictogram: number;
  size: "small" | "big" | number;
  border?: string;
}

const PictogramShow = ({
  pictogram,
  size,
  border,
}: PictogramShowProps): JSX.Element => {
  if (size === "small") {
    size = 100;
  }
  if (size === "big") {
    size = 300;
  }
  return (
    <img
      src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
      className={`border border-2 border-${
        border ? border : "primary"
      } rounded-3`}
      alt="pictograma"
      height={size + "px"}
      width={size + "px"}
    />
  );
};

export default PictogramShow;
