import banner from '../assets/banner.jpg';
import '../styles/banner.css';

function Banner() {
  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <p>content</p>
    </div>
  );
}

export default Banner;
