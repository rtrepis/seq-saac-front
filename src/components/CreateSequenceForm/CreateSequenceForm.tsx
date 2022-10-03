import { SyntheticEvent, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import {
  addSelectPictogramActionCreator,
  deleteSelectPictogramActionCreator,
  restSelectPictogramsActionCreator,
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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(restSelectPictogramsActionCreator());
  }, [dispatch]);

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
    privately: false,
  };

  const [createSequenceData, setCreateDataSequence] = useState(
    initialCreateSequence
  );

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const addPictograms: number[] = [];
    selectPictograms.forEach((element) =>
      addPictograms.push(element.pictogram)
    );

    const newSequence = { ...createSequenceData, pictograms: addPictograms };
    await postCreateSequence(newSequence);
    navigate("/my-sequences");
  };

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateDataSequence({
      ...createSequenceData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckprivately = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const pictogramEmpty = 26527;
    operator > 0
      ? dispatch(
          addSelectPictogramActionCreator({
            index: amountPictograms.amount,
            pictogram: pictogramEmpty,
          })
        )
      : dispatch(deleteSelectPictogramActionCreator());
  };

  const handleSelectPictogram = (indexArray: number) => {
    setAmountPictograms({
      ...amountPictograms,
      index: indexArray,
    });

    setOpenSelectPictogram(!openSelectPictogram);
    document.getElementById("searchPictogramWord")?.focus();
  };

  const [openSelectPictogram, setOpenSelectPictogram] = useState(false);

  return (
    <>
      <Row>
        <Col md={6}>
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
            <Form.Group className="mb-3" controlId="privately">
              <Form.Check
                type="checkbox"
                label="Privada"
                onChange={handleCheckprivately}
              />

              <Form.Text className="text-muted login-form__text">
                Clicar, si no voleu compartir la seqüència
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>Quantitat de pictogrames</Form.Label>
              <InputGroup className="mb-3">
                <Button
                  variant="primary"
                  id="button-amount-rest"
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
                  id="button-amount-plus"
                  onClick={() => handleChangesAmountPictograms(+1)}
                >
                  +
                </Button>
              </InputGroup>
              <Form.Text className="text-muted login-form__text">
                Selecciona la quantitat de pictogrames de la nova seqüència
              </Form.Text>
            </Form.Group>
            {amountPictograms.amount > 0 &&
              [...Array(amountPictograms.amount)].map((element, index) => (
                <>
                  <Button
                    className="m-2"
                    onClick={() => handleSelectPictogram(index)}
                    id={`button-select-${index}`}
                  >
                    Pictograma {index + 1}
                  </Button>
                  <PictogramShow
                    pictogram={selectPictograms[index].pictogram}
                    size="small"
                  />
                </>
              ))}
            <div>
              Busca i escull cada un dels pictogrames abans de guardar la
              seqüència
            </div>
            <div className="text-center m-3">
              <Button type="button" onClick={handleSubmit}>
                Desar la seqüència
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6}>
          <SelectPictogram indexArrayPictograms={amountPictograms.index} />
        </Col>
      </Row>
    </>
  );
};

export default CreateSequenceForm;
