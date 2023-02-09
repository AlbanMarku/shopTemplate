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
        <header>
          <h2>Featured products</h2>
        </header>
        <div className="items">
          {arr.map((item) => (
            <Col key="t">
              <div className="test">
                <ItemCard />
              </div>
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
