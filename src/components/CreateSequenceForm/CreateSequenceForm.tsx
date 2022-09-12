import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addSelectPictogramActionCreator } from "../../app/slice/selectPictogramsSlice";
import { RootState } from "../../app/store";
import { ProtoSequences } from "../../models/sequencesInterface";
import PictogramShow from "../PictogramShow/PictogramShow";
import SelectPictogram from "../SelectPictogram/SelectPictogram";

const CreateSequenceForm = () => {
  const { selectPictograms } = useSelector((state: RootState) => state);
  const { id } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

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
    owner: id,
  };

  const [createSequence, setCreateSequence] = useState(initialCreateSequence);

  const handleSelectPictogram = (indexArray: number) => {
    setAmountPictograms({
      ...amountPictograms,
      index: indexArray,
    });
  };

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateSequence({
      ...createSequence,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckPrivate = (event: any) => {
    setCreateSequence({
      ...createSequence,
      [event.target.id]: event.target.checked,
    });
  };

  const handleChangesAmountPictograms = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      addSelectPictogramActionCreator({
        index: +event.target.value,
        pictogram: 0,
      })
    );

    setAmountPictograms({
      ...amountPictograms,
      [event.target.id]: +event.target.value,
    });
  };

  console.log(selectPictograms);
  return (
    <>
      <Form className="create-sequence-form p-3">
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
          <Form.Control
            type="number"
            placeholder={amountPictograms.amount!.toString()}
            autoComplete="off"
            onChange={handleChangesAmountPictograms}
          />
        </Form.Group>
        <Form.Label>
          Selecciona cada un dels pictogrames de la teva seqüència
        </Form.Label>

        {[...Array(amountPictograms.amount)].map((element, index) => (
          <>
            <Button
              className="m-2"
              key={index}
              onClick={() => handleSelectPictogram(index)}
            >
              Pictograma {index + 1}
            </Button>
            {selectPictograms !== undefined ? (
              <PictogramShow
                pictogram={selectPictograms[index].pictogram}
                key={`${index}_${selectPictograms[index].index}`}
              />
            ) : (
              <PictogramShow pictogram={0} key={index} />
            )}
          </>
        ))}
      </Form>
      <SelectPictogram indexArrayPictograms={amountPictograms.index} />
    </>
  );
};
export default CreateSequenceForm;
