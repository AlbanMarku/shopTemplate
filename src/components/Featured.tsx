import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemCard from './ItemCard';
import '../styles/featured.css';

function Featured() {
  const arr = [1, 2, 3, 'pass the props later'];
  return (
    <div className="Featured">
      <div className="itemArea">
        <Container fluid="lg" className="gx-0 content">
          <Row className="gx-0">
            <Col xs={12}>
              <header>
                <h2>Featured products</h2>
              </header>
            </Col>
          </Row>
          <Row className="gx-0">
            {arr.map((item) => (
              <Col key="t">
                <div className="test">
                  <ItemCard />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Featured;
