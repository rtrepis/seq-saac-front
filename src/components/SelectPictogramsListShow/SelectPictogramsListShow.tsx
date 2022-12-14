import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SelectPictogramShow from "../SelectPictogramShow/SelectPictogramShow";

interface SelectPictogramsListShowProps {
  indexArrayPictograms: number;
}

const SelectPictogramsListShow = ({
  indexArrayPictograms,
}: SelectPictogramsListShowProps): JSX.Element => {
  const { showPictograms } = useSelector((state: RootState) => state);

  return (
    <>
      {showPictograms.map((element) => (
        <SelectPictogramShow
          pictogram={element}
          key={element}
          indexArrayPictograms={indexArrayPictograms}
        />
      ))}
    </>
  );
};

export default SelectPictogramsListShow;
