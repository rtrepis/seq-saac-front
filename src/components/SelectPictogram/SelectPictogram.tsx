import React, { SyntheticEvent, useState } from "react";
import { Form } from "react-bootstrap";
import useAraSaac from "../../hooks/useAraSaac";
import SelectPictogramsListShow from "../SelectPictogramsListShow/SelectPictogramsListShow";

interface SelectPictogramProps {
  indexArrayPictograms: number;
  ref?: React.MutableRefObject<null>;
}

const SelectPictogram = ({
  indexArrayPictograms,
  ref,
}: SelectPictogramProps): JSX.Element => {
  const { getSearchPictogram } = useAraSaac();

  const initialSearchPictogram = {
    searchPictogramWord: "",
  };

  const [searchWord, setSearchWord] = useState(initialSearchPictogram);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord({
      ...searchWord,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const { searchPictogramWord } = searchWord;
    await getSearchPictogram(searchPictogramWord);
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <h2 className="text-center mt-3">
        Pictograma{" "}
        <span className="bg-primary rounded-circle p-2 ps-3 pe-3 text-white">
          {indexArrayPictograms + 1}
        </span>
      </h2>
      <Form className={`SelectPictogram-form p-3`} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="searchPictogramWord">
          <Form.Label>Cerca</Form.Label>
          <Form.Control
            type="text"
            className=""
            placeholder="Introduïu el text de cerca"
            autoComplete="off"
            onChange={handleChange}
          />
          <Form.Text className="mt-3">Buscador de pictogrames</Form.Text>
        </Form.Group>
      </Form>
      <SelectPictogramsListShow indexArrayPictograms={indexArrayPictograms} />
    </div>
  );
};

export default SelectPictogram;
