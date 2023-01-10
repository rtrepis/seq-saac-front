import { useEffect, useState } from "react";
import { Collapse, Form } from "react-bootstrap";
import { IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import Navigation from "../../components/Navigation/Navigation";
import PictogramShow from "../../components/PictogramShow/PictogramShow";
import PictogramWord from "../../components/PictogramWord/PictogramWord";
import useApi from "../../hooks/useApi";
import { SettingsDetailsSequence } from "../../models/pictogramsInterface";
import DetailsSequencePageStyled from "./DetailsSequencePageStyled";

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
        <DetailsSequencePageStyled>
          <div className="d-flex justify-content-between">
            <h2 className="m-4 text-start not-print">{sequences[0].name}</h2>
            <IoSettingsSharp
              className="m-4 fs-2 not-print"
              onClick={() => setOpen(!open)}
              aria-controls="print-settings-collapse"
              type="button"
            ></IoSettingsSharp>
          </div>
          <Collapse in={open}>
            <div id="print-settings-collapse" className="mb-4">
              <Form.Group className="border border-primary rounded-3 group not-print">
                <Form.Label>Paraula</Form.Label>
                <Form.Switch id="word" onChange={handleChange} />
              </Form.Group>
            </div>
          </Collapse>
          <div className="page-print d-flex flex-wrap">
            {sequences[0].pictograms.map((element: number) => (
              <div className="d-flex flex-column mb-3" key={element}>
                <PictogramShow pictogram={element} size={"big"} />

                {pictogramSettings.keyWords && (
                  <PictogramWord pictogram={element} />
                )}
              </div>
            ))}
          </div>
        </DetailsSequencePageStyled>
      )}
    </>
  );
};

export default DetailsSequencePage;
