import CreateSequenceForm from "../../components/CreateSequenceForm/CreateSequenceForm";
import Navigation from "../../components/Navigation/Navigation";

const CreateSequencePage = () => {
  return (
    <>
      <Navigation
        linkPage="create-sequence"
        page="Crea la seqüència"
      ></Navigation>
      <CreateSequenceForm />
    </>
  );
};

export default CreateSequencePage;
