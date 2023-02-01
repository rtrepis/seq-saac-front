import { SyntheticEvent, useEffect, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
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
import { ProtoSequences, SequencesI } from "../../models/sequencesInterface";
import { ISelectPictogram } from "../../Types/interface";
import PictogramShow from "../PictogramShow/PictogramShow";
import SelectPictogram from "../SelectPictogram/SelectPictogram";
import "./CreateSequenceForm.css";

interface CreateSequenceFormsProps {
  sequence?: SequencesI;
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

  const initialActiveSelection: number = 0;
  const [activeSelection, setActiveSelection] = useState(
    initialActiveSelection
  );

  const handleSelectPictogram = (indexArray: number) => {
    setAmountPictograms({
      ...amountPictograms,
      index: indexArray,
    });
    setActiveSelection(indexArray);
    document.getElementById("searchPictogramWord")?.focus();
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Form className="create-sequence-form pt-4 ps-4 pe-4 p-xxl-5">
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
              <InputGroup className="m-0">
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
            <Form.Label className="mb-3">
              Escull i busca cada un dels pictogrames
            </Form.Label>
            <Row>
              {amountPictograms.amount > 0 &&
                [...Array(amountPictograms.amount)].map((element, index) => (
                  <Col xs={12} sm={6} md={12} lg={6} xl={4} xxl={3}>
                    <Nav.Link>
                      <Card
                        className="mb-2 pb-2 border-0"
                        onClick={() => handleSelectPictogram(index)}
                      >
                        <Card.Body
                          className={`p-1 text-center align-items-center ${
                            index === activeSelection && "active-selection"
                          }`}
                        >
                          <div>
                            <Button
                              className="m-1 rounded-circle p-2 ps-3 pe-3"
                              onClick={() => handleSelectPictogram(index)}
                              id={`button-select-${index}`}
                            >
                              {index + 1}
                            </Button>
                          </div>
                          {selectPictograms[index] !== undefined && (
                            <PictogramShow
                              pictogram={selectPictograms[index].pictogram}
                              size="small"
                              border={`${
                                index !== activeSelection
                                  ? "secondary"
                                  : "primary"
                              }`}
                            />
                          )}
                        </Card.Body>
                      </Card>
                    </Nav.Link>
                  </Col>
                ))}
            </Row>
            <Row className="text-center m-3">
              <Button type="button" onClick={handleSubmit}>
                Desar la seqüència
              </Button>
            </Row>
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
