import Carousel from "react-bootstrap/Carousel";
import SliderStyleIMG from "./SliderStyle";
import "./Slider.css";

const Slider = (): JSX.Element => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <SliderStyleIMG
            className="d-block w-100"
            src="/img/slider/banner_2_small.jpeg"
            alt="Pictogrames en ús"
            height="273"
            width="700"
          />
          <Carousel.Caption className="position">
            <h2>Crea i comparteix les teves seqüències</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <SliderStyleIMG
            className="d-block w-100"
            src="/img/slider/banner_6_small.jpeg"
            alt="Pictogrames en ús"
            height="273"
            width="700"
          />
          <Carousel.Caption className="position">
            <h2>Crea i comparteix les teves seqüències</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <SliderStyleIMG
            className="d-block w-100"
            src="/img/slider/banner_7_small.jpeg"
            alt="Pictogrames en ús"
            height="273"
            width="700"
          />
          <Carousel.Caption className="position">
            <h2>Crea i comparteix les teves seqüències</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
