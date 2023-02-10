import Col from 'react-bootstrap/Col';
import Titlebar from './Titlebar';
import ItemCard from './ItemCard';
import '../styles/featured.css';

function Featured() {
  const arr = [1, 2, 3, 'pass the props later'];
  return (
    <div className="Featured">
      <div className="itemArea">
        <Titlebar />
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
