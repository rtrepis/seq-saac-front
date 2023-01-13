import { useEffect, useState } from "react";
import {
  Col,
  Collapse,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { IoPrint, IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import Navigation from "../../components/Navigation/Navigation";
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

    console.log(pictogramSettings.size);
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
                  />
                </Form.Label>
              </Form.Group>

              <Form.Group className="p-2 not-print" controlId="size" as={Col}>
                <Form.Label>Pictogrames per pàgina</Form.Label>

                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="rangeNPictogramsForPage">
                      Hallow world !!
                    </Tooltip>
                  }
                >
                  <Form.Range min={100} max={300} onChange={handleChange} />
                </OverlayTrigger>
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
          <div className="m-4 page-print d-flex flex-wrap gap-3 text-center align-items-center">
            {sequences[0].pictograms.map((element: number) => (
              <div className="d-flex flex-column" key={element}>
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
