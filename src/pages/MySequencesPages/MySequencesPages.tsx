import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Navigation from "../../components/Navigation/Navigation";
import SequencesCardList from "../../components/SequencesCardList/SequencesCardList";
import useApi from "../../hooks/useApi";

const MySequencePage = (): JSX.Element => {
  const { getSequencesOwner } = useApi();
  const sequenceOwner = useSelector((state: RootState) => state.sequences);

  useEffect(() => {
    getSequencesOwner();
  }, [getSequencesOwner]);

  return (
    <>
      <Navigation page="Les meves seqüències" linkPage="my-sequences" />
      <SequencesCardList sequences={sequenceOwner} owner={true} />
    </>
  );
};
export default MySequencePage;
