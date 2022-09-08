import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Navigation from "../../components/Navigation/Navigation";
import SequencesCardList from "../../components/SequencesCardList/SequencesCardList";
import Slider from "../../components/Slider/Slider";
import useApi from "../../hooks/useApi";

const HomePage = (): JSX.Element => {
  const { getAllPublicSequence } = useApi();
  const sequencePublic = useSelector((state: RootState) => state.sequences);

  useEffect(() => {
    getAllPublicSequence();
  }, [getAllPublicSequence]);

  return (
    <>
      <Navigation page="SEQ-SAAC" linkPage="home" />
      <Slider />
      <SequencesCardList sequences={sequencePublic} />
    </>
  );
};
export default HomePage;
