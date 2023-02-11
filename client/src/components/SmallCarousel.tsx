import Carousel from 'react-bootstrap/Carousel';
import '../styles/smallCarousel.css';

function SmallCarousel() {
  return (
    <Carousel indicators={false} controls={false} className="SmallCarousel">
      <Carousel.Item>
        <img src="https://dummyimage.com/640x360/fff/aaa" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://loremflickr.com/640/360" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SmallCarousel;
