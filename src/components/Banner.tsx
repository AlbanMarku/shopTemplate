import banner from '../assets/banner.jpg';
import Carouselcomp from './Carouselcomp';
import '../styles/banner.css';

function Banner() {
  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="blurb">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At maxime magnam eius libero. Repellat, magni.</p>
      </div>
      <div className="showcase">{/* <Carouselcomp /> */}</div>
    </div>
  );
}

export default Banner;
