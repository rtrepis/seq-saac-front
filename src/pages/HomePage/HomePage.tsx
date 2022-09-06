import Navigation from "../../components/Navigation/Navigation";
import SequenceCard from "../../components/SequenceCard/SequenceCard";
import Slider from "../../components/Slider/Slider";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Navigation page="SEQ-SAAC" linkPage="home" />
      <Slider />
      <SequenceCard />
    </>
  );
};
export default HomePage;
