import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navcomp from '../components/Navcomp';
import Carouselcomp from '../components/Carouselcomp';
import Featured from '../components/Featured';
import Banner from '../components/Banner';
import '../styles/home.css';

function Home() {
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
            <Carouselcomp />
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
      </Container>
    </div>
  );
}

export default Home;
