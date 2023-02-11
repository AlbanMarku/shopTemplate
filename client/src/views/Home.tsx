import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navcomp from '../components/Navcomp';
import Carouselcomp from '../components/Carouselcomp';
import Featured from '../components/Featured';
import Banner from '../components/Banner';
import Social from '../components/Social';
import '../styles/home.css';
import slideData from '../data/slides.json';

function Home() {
  const mainData = slideData.main;

  return (
    <div className="Home">
      <Container fluid className="gx-0">
        <Row className="gx-0">
          <Col>
            <Navcomp />
          </Col>
        </Row>
      </Container>

      <Container fluid="lg" className="gx-0">
        <Row className="gx-0">
          <Col>
            <Carouselcomp slides={mainData} />
          </Col>
        </Row>
        <Row className="gx-0">
          <Col>
            <Featured />
          </Col>
        </Row>
        <Row className="gx-0">
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row className="gx-0">
          <Col>
            <Social />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
