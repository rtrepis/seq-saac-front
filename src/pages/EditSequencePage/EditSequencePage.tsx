import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import CreateSequenceForm from "../../components/CreateSequenceForm/CreateSequenceForm";
import Navigation from "../../components/Navigation/Navigation";
import useApi from "../../hooks/useApi";

const EditSequencePage = (): JSX.Element => {
  const { sequences } = useSelector((state: RootState) => state);
  const { getSequenceId } = useApi();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await getSequenceId(id!);
    })();
  }, [getSequenceId, id]);

  return (
    <>
      <Navigation linkPage="edit-sequence" page="Editar la seqüencia" />
      {sequences[0] && <CreateSequenceForm sequence={sequences[0]} />}
    </>
  );
};

export default EditSequencePage;
