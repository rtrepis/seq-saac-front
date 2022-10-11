import React, { SyntheticEvent, useEffect, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import {
  addSelectPictogramActionCreator,
  deleteSelectPictogramActionCreator,
  loadAllSelectPictogramActionCreator,
  restSelectPictogramsActionCreator,
} from "../../app/slice/selectPictogramsSlice";
import { RootState } from "../../app/store";
import useApi from "../../hooks/useApi";
import { ProtoSequences, Sequences } from "../../models/sequencesInterface";
import { ISelectPictogram } from "../../Types/interface";
import PictogramShow from "../PictogramShow/PictogramShow";
import SelectPictogram from "../SelectPictogram/SelectPictogram";

interface CreateSequenceFormsProps {
  sequence?: Sequences;
}

const CreateSequenceForm = ({ sequence }: CreateSequenceFormsProps) => {
  const { selectPictograms } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const { postCreateSequence, putSequenceId } = useApi();
  const navigate = useNavigate();

  const initialCreateSequence: ProtoSequences = {
    name: sequence?.name === undefined ? "" : sequence.name,
    pictograms:
      sequence?.pictograms.length === 0 || sequence?.pictograms === undefined
        ? []
        : sequence?.pictograms,
    privately: sequence?.privately === undefined ? false : sequence.privately,
  };

  const [createSequenceData, setCreateDataSequence] = useState(
    initialCreateSequence
  );

  useEffect(() => {
    if (sequence !== undefined) {
      let loadAllSelectPictogramSequence: ISelectPictogram[] = [];

      sequence.pictograms.forEach((pictogram, index) => {
        const addSelectPictogram = { pictogram: pictogram, index: index };
        loadAllSelectPictogramSequence.push(addSelectPictogram);
      });

      dispatch(
        loadAllSelectPictogramActionCreator(loadAllSelectPictogramSequence)
      );
    } else {
      dispatch(restSelectPictogramsActionCreator());
    }
  }, [dispatch, sequence]);

  const initialAmountPictogram = {
    amount:
      sequence?.pictograms.length === 0 || sequence?.pictograms === undefined
        ? 0
        : sequence.pictograms.length,
    index: 0,
  };

  const [amountPictograms, setAmountPictograms] = useState(
    initialAmountPictogram
  );

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const addPictograms: number[] = [];
    selectPictograms.forEach((element) =>
      addPictograms.push(element.pictogram)
    );
    const newSequence = { ...createSequenceData, pictograms: addPictograms };

    sequence === undefined
      ? await postCreateSequence(newSequence)
      : await putSequenceId(sequence.id, newSequence);

    navigate("/my-sequences");
  };

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateDataSequence({
      ...createSequenceData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckPrivately = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    document.getElementById("searchPictogramWord")?.focus();
  };

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
                value={createSequenceData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="privately">
              <Form.Check
                type="checkbox"
                label="Privada"
                onChange={handleCheckPrivately}
                checked={createSequenceData.privately}
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
            <Row>
              {amountPictograms.amount > 0 &&
                [...Array(amountPictograms.amount)].map((element, index) => (
                  <Col sx={6} className="justify-content-center">
                    <Card style={{ width: "13rem" }} className="m-1">
                      <Card.Body className="p-1">
                        {selectPictograms[index] !== undefined && (
                          <PictogramShow
                            pictogram={selectPictograms[index].pictogram}
                            size="small"
                          />
                        )}
                        <Button
                          className="m-1"
                          onClick={() => handleSelectPictogram(index)}
                          id={`button-select-${index}`}
                        >
                          Pictograma {index + 1}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
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
