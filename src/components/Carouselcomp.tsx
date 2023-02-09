import Carousel from 'react-bootstrap/Carousel';
import '../styles/carouselcomp.css';

type Props = {
  slides: Slide[];
};

type Slide = {
  image: string;
  mainText: string;
  subText: string;
};

function Carouselcomp({ slides }: Props) {
  return (
    <div className="Carouselcomp">
      <Carousel id="test">
        {slides.map((item) => (
          <Carousel.Item
            key={item.mainText}
            className="imageItem"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <Carousel.Caption>
              <h3>{item.mainText}</h3>
              <p>{item.subText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Carouselcomp;
