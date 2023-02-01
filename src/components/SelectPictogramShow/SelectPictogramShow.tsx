import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateSelectPictogramActionCreator } from "../../app/slice/selectPictogramsSlice";
import { SelectPictogram } from "../../models/sequencesInterface";
import SelectPictogramShowStyled from "./SelectPictogramShowStyled";

interface SelectPictogramShowProps {
  pictogram: number;
  indexArrayPictograms: number;
}

const SelectPictogramShow = ({
  pictogram,
  indexArrayPictograms,
}: SelectPictogramShowProps): JSX.Element => {
  const dispatch = useDispatch();

  const selectPictogramIndexArray = () => {
    let addPictograms: SelectPictogram = {
      index: indexArrayPictograms,
      pictogram: pictogram,
    };

    dispatch(updateSelectPictogramActionCreator(addPictograms));
    const nextSelectPictogram = indexArrayPictograms + 1;

    document.getElementById(`button-select-${nextSelectPictogram}`)?.focus();
  };

  return (
    <Nav.Link>
      <SelectPictogramShowStyled
        src={`https://api.arasaac.org/api/pictograms/${pictogram.toString()}`}
        className=""
        alt="pictograma"
        height="100px"
        width="100px"
        onClick={selectPictogramIndexArray}
      />
    </Nav.Link>
  );
};

export default SelectPictogramShow;
