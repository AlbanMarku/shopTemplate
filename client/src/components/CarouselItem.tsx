import Carousel from 'react-bootstrap/Carousel';

type Props = {
  image: string;
  mainText: string;
  subText: string;
};

function CarouselItem({ image, mainText, subText }: Props) {
  return (
    <Carousel.Item
      className="imageItem"
      style={{
        backgroundImage: `url(https://fakeimg.pl/640x360)`,
      }}
    >
      ffff
    </Carousel.Item>
  );
}

export default CarouselItem;
