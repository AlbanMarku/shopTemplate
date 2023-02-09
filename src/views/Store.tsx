import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navcomp from '../components/Navcomp';

function Store() {
  return (
    <div className="Store">
      <Container fluid className="gx-0">
        <Row className="gx-0">
          <Col>
            <Navcomp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Store;
