import CreateSequenceForm from "../../components/CreateSequenceForm/CreateSequenceForm";
import Navigation from "../../components/ui/Navigation/Navigation";

const CreateSequencePage = () => {
  return (
    <>
      <Navigation linkPage="createSequence"></Navigation>
      <CreateSequenceForm />
    </>
  );
};

export default CreateSequencePage;
