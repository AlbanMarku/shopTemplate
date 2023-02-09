import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navcomp from '../components/Navcomp';
import Carouselcomp from '../components/Carouselcomp';
import Featured from '../components/Featured';
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

      <div className="container">
        <Carouselcomp />
        <Featured />
      </div>
    </div>
  );
}

export default Home;
