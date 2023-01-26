import Carousel from "react-bootstrap/Carousel";

const Slider = (): JSX.Element => {
  return (
    <>
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        className="bg-primary bg-opacity-25 d-md-none pt-4 border-bottom border-3 border-light"
      >
        <Carousel.Item className="text-center">
          <img
            src="/img/cta/crea-200px.jpg"
            alt="crea"
            height="200"
            width="200"
            className="border border-4 border-primary rounded-4"
          />
          <h2 className="mt-3 pb-2 fw-bold text-dark">Crea</h2>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <img
            src="/img/cta/compartir-200px.jpg"
            alt="crea"
            height="200"
            width="200"
            className="border border-4 border-primary rounded-4"
          />
          <h2 className="mt-3 pb-2 fw-bold text-dark">Comparteix</h2>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <img
            src="/img/cta/sequencies-200px.jpg"
            alt="crea"
            height="200"
            width="200"
            className="border border-4 border-primary rounded-4"
          />
          <h2 className="mt-3 pb-2 fw-bold text-dark">Seqüències</h2>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
