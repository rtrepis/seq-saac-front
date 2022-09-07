import Navigation from "../../components/Navigation/Navigation";
import SequencesCardList from "../../components/SequencesCardList/SequencesCardList";
import Slider from "../../components/Slider/Slider";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Navigation page="SEQ-SAAC" linkPage="home" />
      <Slider />
      <SequencesCardList />
    </>
  );
};
export default HomePage;
