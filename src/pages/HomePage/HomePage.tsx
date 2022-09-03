import Navigation from "../../components/Navigation/Navigation";
import Slider from "../../components/Slider/Slider";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Navigation page="SEQ-SAAC" linkPage="home" />
      <Slider />
    </>
  );
};
export default HomePage;
