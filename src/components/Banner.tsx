import SmallCarousel from './SmallCarousel';
import banner from '../assets/banner.jpg';
import slideData from '../data/slides.json';
import '../styles/banner.css';

function Banner() {
  const data = slideData.banner;

  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="blurb">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus, consequatur dicta officiis ipsa
          consequuntur?
        </p>
      </div>
      <div className="slide">
        <SmallCarousel />
      </div>
    </div>
  );
}

export default Banner;
