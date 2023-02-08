import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import item from '../assets/item.jpg';
import '../styles/itemCard.css';

function ItemCard() {
  return (
    <div className="ItemCard">
      <div className="itemDisplay">
        <img src={item} alt="product" />
        <div className="productName">
          <p>Item</p>
          <p>£3.00</p>
        </div>
      </div>
      <div className="itemInfo">
        <Container>
          <Row>
            <Button>Purchase</Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ItemCard;
