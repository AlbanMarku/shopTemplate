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
        <Button id="purchaseBtn">Purchase</Button>
      </div>
    </div>
  );
}

export default ItemCard;
