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
  };

  const [pictogramSettings, setPictogramSettings] = useState(
    initialSettingsDetailsSequence
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPictogramSettings({
      ...pictogramSettings,
      keyWords: !pictogramSettings.keyWords,
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
          <div className="d-flex justify-content-between m-4">
            <h2 className="text-start not-print">{sequences[0].name}</h2>
            <IoSettingsSharp
              className="fs-2 not-print"
              onClick={() => setOpen(!open)}
              aria-controls="print-settings-collapse"
              type="button"
              aria-label="Configuració"
            />
          </div>

          <Collapse in={open}>
            <Row
              id="print-settings-collapse"
              className="m-4 justify-content-between align-items-center text-center "
            >
              <Form.Group className="not-print" as={Col}>
                <Form.Label>
                  Paraula
                  <Form.Check type="switch" id="word" onChange={handleChange} />
                </Form.Label>
              </Form.Group>

              <Form.Group
                className="p-2 not-print"
                controlId="nPictogramsForPrintPage"
                as={Col}
              >
                <Form.Label>Pictogrames per pàgina</Form.Label>

                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="rangeNPictogramsForPage">
                      Hallow world !!
                    </Tooltip>
                  }
                >
                  <Form.Range min={0} max={10} />
                </OverlayTrigger>
              </Form.Group>
              <Col>
                <IoPrint className="fs-2 not-print" aria-label="Imprimir" />
              </Col>
            </Row>
          </Collapse>
          <div className="m-4 page-print d-flex flex-wrap gap-3 text-center align-items-center">
            {sequences[0].pictograms.map((element: number) => (
              <div className="d-flex flex-column mb-3" key={element}>
                <PictogramShow pictogram={element} size={"big"} />

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
