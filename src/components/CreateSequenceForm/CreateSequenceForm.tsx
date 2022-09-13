import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import {
  addSelectPictogramActionCreator,
  deleteSelectPictogramActionCreator,
} from "../../app/slice/selectPictogramsSlice";
import { RootState } from "../../app/store";
import useApi from "../../hooks/useApi";
import { ProtoSequences } from "../../models/sequencesInterface";
import PictogramShow from "../PictogramShow/PictogramShow";
import SelectPictogram from "../SelectPictogram/SelectPictogram";

const CreateSequenceForm = () => {
  const { selectPictograms } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const { postCreateSequence } = useApi();

  const initialAmountPictogram = {
    amount: 0,
    index: 0,
  };

  const [amountPictograms, setAmountPictograms] = useState(
    initialAmountPictogram
  );

  const initialCreateSequence: ProtoSequences = {
    name: "",
    pictograms: [],
    private: false,
  };

  const [createSequenceData, setCreateDataSequence] = useState(
    initialCreateSequence
  );

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const addPictograms: number[] = [];
    selectPictograms.forEach((element) =>
      addPictograms.push(element.pictogram)
    );

    const newSequence = { ...createSequenceData, pictograms: addPictograms };
    await postCreateSequence(newSequence);
  };

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateDataSequence({
      ...createSequenceData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckPrivate = (event: any) => {
    setCreateDataSequence({
      ...createSequenceData,
      [event.target.id]: event.target.checked,
    });
  };

  const handleChangesAmountPictograms = (operator: number) => {
    setAmountPictograms({
      ...amountPictograms,
      amount: amountPictograms.amount + operator,
    });

    operator > 0
      ? dispatch(
          addSelectPictogramActionCreator({
            index: amountPictograms.amount,
            pictogram: 26527,
          })
        )
      : dispatch(deleteSelectPictogramActionCreator());
  };

  const handleSelectPictogram = (indexArray: number) => {
    setAmountPictograms({
      ...amountPictograms,
      index: indexArray,
    });
  };

  const isVisible = selectPictograms.length > 0;

  return (
    <>
      <Form className="create-sequence-form p-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduïu el nom de la seqüència"
            autoComplete="off"
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="private">
          <Form.Check
            type="checkbox"
            label="Privada"
            onChange={handleCheckPrivate}
          />

          <Form.Text className="text-muted login-form__text">
            clicar, si no voleu compartir la seqüència
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Quantitat de pictogrames</Form.Label>
          <InputGroup className="mb-3">
            <Button
              variant="primary"
              id="button-addon1"
              onClick={() => handleChangesAmountPictograms(-1)}
            >
              -
            </Button>
            <Form.Control
              type="number"
              placeholder={amountPictograms.amount.toString()}
              autoComplete="off"
              disabled
            />
            <Button
              variant="primary"
              id="button-addon1"
              onClick={() => handleChangesAmountPictograms(+1)}
            >
              +
            </Button>
          </InputGroup>
        </Form.Group>
        <Form.Label>
          Selecciona cada un dels pictogrames de la teva seqüència
        </Form.Label>

        {amountPictograms.amount > 0
          ? [...Array(amountPictograms.amount)].map((element, index) => (
              <>
                <Button
                  className="m-2"
                  key={`button${index}`}
                  onClick={() => handleSelectPictogram(index)}
                >
                  Pictograma {index + 1}
                </Button>
                {isVisible && (
                  <PictogramShow
                    pictogram={selectPictograms[index].pictogram}
                    key={`${selectPictograms[index].index}${selectPictograms[index].pictogram}`}
                    size="small"
                  />
                )}
              </>
            ))
          : ""}
        <div className="text-center m-3">
          <Button type="submit">Desar la seqüència</Button>
        </div>
      </Form>
      <SelectPictogram indexArrayPictograms={amountPictograms.index} />
    </>
  );
};

export default CreateSequenceForm;
