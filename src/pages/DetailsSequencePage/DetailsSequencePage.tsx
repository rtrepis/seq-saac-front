import { useEffect, useState } from "react";
import { Col, Collapse, Form, Row } from "react-bootstrap";
import { IoPrint, IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import Navigation from "../../components/ui/Navigation/Navigation";
import PictogramShow from "../../components/PictogramShow/PictogramShow";
import PictogramWord from "../../components/PictogramWord/PictogramWord";
import useApi from "../../hooks/useApi";
import { SettingsDetailsSequence } from "../../models/pictogramsInterface";

const DetailsSequencePage = (): JSX.Element => {
  const { sequences } = useSelector((state: RootState) => state);
  const { getSequenceId } = useApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await getSequenceId(id!);
    })();
  }, [getSequenceId, id]);

  const [open, setOpen] = useState(false);

  const initialSettingsDetailsSequence: SettingsDetailsSequence = {
    keyWords: false,
    size: "big",
  };

  const [pictogramSettings, setPictogramSettings] = useState(
    initialSettingsDetailsSequence
  );

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPictogramSettings({
      ...pictogramSettings,
      keyWords: !pictogramSettings.keyWords,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const property = event.target.id;
    const newValue = Number(event.target.value);

    setPictogramSettings({
      ...pictogramSettings,
      [property]: newValue,
    });
  };

  return (
    <>
      <Navigation
        page="Seqüència"
        linkPage="details-sequence"
        isNotPrint={true}
      />

      {sequences[0] && (
        <>
          <div className="m-4 d-flex justify-content-between align-items-center not-print">
            <h2 className="text-start not-print">{sequences[0].name}</h2>
            <IoSettingsSharp
              className="fs-2 not-print"
              onClick={() => setOpen(!open)}
              aria-controls="print-settings-collapse"
              type="button"
              aria-label="Configuració"
            />
          </div>

          <Collapse in={open} className="border rounded-3">
            <Row
              id="print-settings-collapse"
              className="m-4 justify-content-between align-items-center text-center not-print"
            >
              <Form.Group className="not-print" as={Col}>
                <Form.Label>
                  Paraula
                  <Form.Check
                    type="switch"
                    id="KeyWord"
                    onChange={handleChangeSwitch}
                    className="m-1"
                  />
                </Form.Label>
              </Form.Group>

              <Form.Group
                className="p-2 not-print"
                controlId="nPictogramsForPage"
                as={Col}
              >
                <Form.Label className="m-0">Pictograma per fila</Form.Label>
                <div>
                  <Form.Label className="m-1">
                    5
                    <Form.Check
                      type="radio"
                      name="nPictogramsForPage"
                      id="size"
                      onChange={handleChange}
                      inline
                      className="m-1"
                      value={180}
                    />
                  </Form.Label>
                  <Form.Label className="m-1">
                    4
                    <Form.Check
                      type="radio"
                      name="nPictogramsForPage"
                      id="size"
                      onChange={handleChange}
                      inline
                      className="m-1"
                      value={230}
                    />
                  </Form.Label>
                  <Form.Label className="m-1">
                    3
                    <Form.Check
                      type="radio"
                      name="nPictogramsForPage"
                      id="size"
                      onChange={handleChange}
                      inline
                      className="m-1"
                      value={300}
                    />
                  </Form.Label>
                  <Form.Label className="m-1">
                    2
                    <Form.Check
                      type="radio"
                      name="nPictogramsForPage"
                      id="size"
                      onChange={handleChange}
                      inline
                      className="m-1"
                      value={450}
                    />
                  </Form.Label>
                </div>
              </Form.Group>
              <Col>
                <IoPrint
                  className="fs-2 not-print"
                  aria-label="Imprimir"
                  type="button"
                  onClick={() => window.print()}
                />
              </Col>
            </Row>
          </Collapse>
          <div className="m-4 page-print d-flex flex-wrap gap-4 text-center align-items-center">
            {sequences[0].pictograms.map((element: number) => (
              <div
                className="d-flex flex-column align-items-center"
                key={element}
              >
                <PictogramShow
                  pictogram={element}
                  size={pictogramSettings.size}
                />

                {pictogramSettings.keyWords && (
                  <PictogramWord pictogram={element} />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DetailsSequencePage;
