import Carousel from 'react-bootstrap/Carousel';
import slide from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.png';
import '../styles/carouselcomp.css';

function Carouselcomp() {
  return (
    <div className="Carouselcomp">
      <Carousel id="test">
        <Carousel.Item
          className="imageItem"
          style={{
            backgroundImage: `url(${slide})`,
          }}
        >
          <Carousel.Caption>
            <h3>First</h3>
            <p>test</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item
          className="imageItem"
          style={{
            backgroundImage: `url(${slide2})`,
          }}
        >
          <Carousel.Caption>
            <h3>Second</h3>
            <p>test</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselcomp;
